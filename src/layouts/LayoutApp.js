import React from "react";
import AppHeader from "../app/app-header/AppHeader";
import Footer from "../common/layout/Footer";

const LayoutApp = ({ children }) => (
	<>
		<AppHeader navPosition="right" className="reveal-from-bottom" />
		<main className="site-content">{children}</main>
		<Footer />
	</>
);

export default LayoutApp;
