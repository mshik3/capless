import React from "react";
import UserHeaderCard from "../../profile/components/UserHeaderCard";
import classNames from "classnames";
import "../style/mini-user-profile.scss";

const MiniUserProfile = ({ name }) => {
	const outerClasses = classNames(`side-bar mini-user-profile`);
	let params = {
		name: "Rebecca Sanford",
		companyName: "Venture Standard",
		companyPath: "/vc"
	};
	return (
		<>
			<div className={outerClasses}>
				<div className="mini-user-profile-header">
					<UserHeaderCard params={params} isMainProfile={false} />
				</div>
			</div>
		</>
	);
};

export default MiniUserProfile;
