import React from "react";
import Footer from "../common/layout/Footer";

const Layout_NoHeader = ({ children }) => (
	<>
		<main className="site-content">{children}</main>
		<Footer />
	</>
);

export default Layout_NoHeader;
