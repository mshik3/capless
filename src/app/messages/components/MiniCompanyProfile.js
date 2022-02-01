import React from "react";
import HeaderCard from "../../companyprofile/components/HeaderCard";
import classNames from "classnames";
import "../style/mini-company-profile.scss";

const MiniCompanyProfile = ({ name }) => {
	const outerClasses = classNames(`side-bar mini-company-profile`);
	return (
		<>
			<div className={outerClasses}>
				<div className="mini-company-profile-header">
					<HeaderCard isMainProfile={false} />
				</div>
			</div>
		</>
	);
};

export default MiniCompanyProfile;
