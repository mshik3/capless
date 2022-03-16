import React from "react";
import UserHeaderCard from "./components/UserHeaderCard";
import LocationCard from "./components/LocationCard";
import IndustryCard from "./components/IndustryCard";
import "./style/user-profile.scss";
import "./style/cards.scss";

const UserProfile = (props) => {
	let params = {
		name: "Paul Nelson",
		companyName: "Pear Products",
		companyPath: "/company"
	};
	if (props.location.state) {
		params = props.location.state;
	}
	return (
		<div className="container-app">
			<div className="user-profile">
				<UserHeaderCard params={params} />
				<div className="card-row">
					<LocationCard classes={["profile-card", "medium-card"]} />
					<IndustryCard classes={["profile-card", "small-card", "card-last", "center-text"]} />
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
