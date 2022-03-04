import React from "react";
import Image from "../../../common/elements/Image";
import ActionButtons from "./ActionButtons";

const UserHeaderCard = ({ params }) => {
	if (!params) {
		params = {
			name: "Paul Nelson"
		};
	}
	return (
		<>
			<div className="profile-card">
				<div className="user-profile-header">
					<Image
						className={"user-profile-image"}
						src={require(`../../../assets/images/team_images/${params.name}.jpeg`)}
					/>
					<div className="user-profile-info">
						<h2 >{params.name}</h2>
						<h5>CEO & Co-Founder of Pear Products</h5>
						<p>Chicago, Illinois | Agritech</p>
						<p className="summary">I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets. I have over 15 years of experience working in data science.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserHeaderCard;
