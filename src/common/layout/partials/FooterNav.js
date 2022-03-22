import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset footer-list footer-nav-list">
				<li>
					<Link to="/aboutcapless">About</Link>
				</li>
				<li>
					<a href="mailto:caplessteam@gmail.com">Contact</a>
				</li>
				<li>
					<a href="https://storyset.com/work">Work illustrations by Storyset</a>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
