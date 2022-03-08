import React from "react";
import Image from "../../../common/elements/Image";
import ActionButtons from "./ActionButtons";

const HeaderCard = ({ name, aboutUs, isMainProfile = true }) => {
	return (
		<>
			<div className="profile-card">
				<div className="company-profile-header">
					{isMainProfile && (
						<Image
							className={"company-profile-image"}
							src={require(`../../../assets/images/profile_images/${name}.png`)}
						/>
					)}
					<h1 className="company-profile-name">{name}</h1>
				</div>
				<h2 className="card-header">About Us</h2>
				<p>{aboutUs}</p>
				{isMainProfile && <ActionButtons />}
			</div>
		</>
	);
};

export default HeaderCard;
