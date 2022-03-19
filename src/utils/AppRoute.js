import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify'

const AppRoute = ({ component: Component, layout: Layout, doRender=true, ...componentProps }) => {
	return (
		<Route
			render={() => (
				<Layout>
					{doRender && <Component {...componentProps} />}
				</Layout>
			)}
		/>
	);
};

const ProtectedAppRoute = ({ component: Component, layout: Layout, ...componentProps }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const history = useHistory();
	const isAuthenticated = () => {
        Auth.currentSession().then( response => {
            if(response.isValid()) {
				setLoggedIn(true);
            } else {
				setLoggedIn(false);
				history.push('/signin');
			}
        }).catch(() => {
			setLoggedIn(false);
			history.push('/signin');
        });
    };

	useEffect(() => {
        isAuthenticated();
    }, []);

	return <AppRoute component={Component} layout={Layout} {...componentProps} doRender={loggedIn} />
};

const UnProtectedAppRoute = ({ component: Component, layout: Layout, ...componentProps }) => {
	const [loggedIn, setLoggedIn] = useState(true);
	const history = useHistory();
	const isAuthenticated = () => {
        Auth.currentSession().then( response => {
			if (response.isValid()) {
				// If user is signed in, go to feed
				setLoggedIn(true);
				history.push('/feed');
			} else {
				setLoggedIn(false);
			}
        }).catch(() => {
			setLoggedIn(false);
			// Not signed in
        });
    };

	useEffect(() => {
        isAuthenticated();
    }, []);

	return <AppRoute component={Component} layout={Layout} {...componentProps} doRender={!loggedIn} />
};

export { AppRoute, ProtectedAppRoute, UnProtectedAppRoute };
