import React from "react";
import Image from "../../../common/elements/Image";

const HeaderCard = ({ params, isMainProfile = true }) => {
	if (!params) {
		params = {
			name: "Paul Nelson",
			aboutMe: "CEO & Co-Founder of Pear Products"
		};
	}
	return (
		<>
			<div className="profile-card">
				<div className="company-profile-header">
					{isMainProfile && (
						<Image
							className={"user-profile-image"}
							src={require(`../../../assets/images/team_images/${params.name}.jpeg`)}
						/>
					)}
					<h1 className="company-profile-name">{params.name}</h1>
				</div>
				<p>{params.aboutMe}</p>
			</div>
		</>
	);
};

export default HeaderCard;
