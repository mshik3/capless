import React from "react";
import UserHeaderCard from "./components/UserHeaderCard";
import "./style/profile.scss";

const UserProfile = (props) => {
	let params = {
		name: "Paul Nelson",
        aboutMe: "CEO & Co-Founder of Pear Products"
	};
	if (props) {
		params = props.location.state;
	}
	return (
		<div className="container-app">
			<div className="company-profile">
				<UserHeaderCard params={params} />			
			</div>
		</div>
	);
};

export default UserProfile;
