import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import { AppRoute, ProtectedAppRoute, UnProtectedAppRoute } from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import Layout_NoHeader from "./layouts/Layout_NoHeader";
import LayoutApp from "./layouts/LayoutApp";
import LayoutDefault from "./layouts/LayoutDefault";

// Homepage Views
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";

// App Specific Views
import MessageView from "./app/messages/MessageView";
import SignInView from "./app/onboarding/SignInView";
import SignUpView from "./app/onboarding/SignUpView";

import Feed from "./app/feed/Feed";
import CompanyProfile from "./app/profile/CompanyProfile";
import UserProfile from "./app/profile/UserProfile";
import VCProfile from "./app/profile/VCProfile";
import Settings from "./app/settings/Settings";

// Amplify
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path={process.env.PUBLIC_URL + "/"} component={Home} layout={LayoutDefault} />
					<AppRoute path={process.env.PUBLIC_URL + "/aboutcapless"} component={AboutUs} layout={LayoutDefault} />
					<ProtectedAppRoute path={process.env.PUBLIC_URL + "/feed"} component={Feed} layout={LayoutApp} />
					<ProtectedAppRoute
						path={process.env.PUBLIC_URL + "/company"}
						component={CompanyProfile}
						layout={LayoutApp}
					/>
					<ProtectedAppRoute
						path={process.env.PUBLIC_URL + "/profile"}
						component={UserProfile}
						layout={LayoutApp}
					/>
					<ProtectedAppRoute path={process.env.PUBLIC_URL + "/vc"} component={VCProfile} layout={LayoutApp} />
					<ProtectedAppRoute path={process.env.PUBLIC_URL + "/settings"} component={Settings} layout={LayoutApp} />
					<ProtectedAppRoute
						path={process.env.PUBLIC_URL + "/messages"}
						component={MessageView}
						layout={LayoutApp}
					/>
					<UnProtectedAppRoute
						path={process.env.PUBLIC_URL + "/signin"}
						component={SignInView}
						layout={Layout_NoHeader}
					/>
					<UnProtectedAppRoute
						path={process.env.PUBLIC_URL + "/signup"}
						component={SignUpView}
						layout={Layout_NoHeader}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
