import React from "react";
import Image from "../../../common/elements/Image";
import { Link } from "react-router-dom";

const UserHeaderCard = ({ params }) => {
	const companyLinkObject = {
		pathname: params.companyPath,
		state: {
			name: params.companyName
		}
	};
	return (
		<>
			<div className="profile-card">
				<div className="user-profile-header">
					<Image
						className={"user-profile-image"}
						src={require(`../../../assets/images/team_images/${params.name}.jpeg`)}
					/>
					<div className="user-profile-info">
						<div className="name-edit">
							<h2 >{params.name}</h2>
							<Link className={"edit-container"}>
								<Image
									className={"edit"}
									id={"edit-static"}
									src={require(`../../../assets/images/icons/pencil.png`)}
								/>
								<Image
									className={"edit"}
									id={"edit-hover"}
									src={require(`../../../assets/images/icons/pencil.gif`)}
								/>
							</Link>
						</div>
						<h5>CEO & Co-Founder of Pear Products</h5>
						<p>Chicago, Illinois | Agritech</p>
						<p className="summary">I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets. I have over 15 years of experience working in data science.</p>
					</div>
					<Link className={"company-profile-link"} to={companyLinkObject}>
						<Image
							className={"company-profile-image"}
							src={require(`../../../assets/images/profile_images/${params.companyName}.png`)}
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default UserHeaderCard;
