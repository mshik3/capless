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

	return <AppRoute component={Component} layout={Layout} {...componentProps} />
};

const UnProtectedAppRoute = ({ component: Component, layout: Layout, ...componentProps }) => {
	const history = useHistory();
	const isAuthenticated = () => {
        Auth.currentSession().then( response => {
			if (response.isValid()) {
				// If user is signed in, go to feed
				history.push('/feed');
			}
        }).catch(() => {
			// Not signed in
        });
    };

	useEffect(() => {
        isAuthenticated();
    }, []);

	return <AppRoute component={Component} layout={Layout} {...componentProps} />
};

export { AppRoute, ProtectedAppRoute, UnProtectedAppRoute };
