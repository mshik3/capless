import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify'

const AppRoute = ({ component: Component, layout: Layout, ...componentProps }) => {
	return (
		<Route
			render={() => (
				<Layout>
					<Component {...componentProps} />
				</Layout>
			)}
		/>
	);
};

const ProtectedAppRoute = ({ component: Component, layout: Layout, ...componentProps }) => {

	const history = useHistory();
	const isAuthenticated = () => {
        Auth.currentSession().then( response => {
            if(!response.isValid()) {
				history.push('/signin');
            }
        }).catch(() => {
			history.push('/signin');
        });
    };

	useEffect(() => {
        isAuthenticated();
    }, []);

	return (
		<Route
			render={() => (
				<Layout>
					<Component {...componentProps} />
				</Layout>
			)}
		/>
	);
};

export { AppRoute, ProtectedAppRoute};
