import React from "react";
import PropTypes from "prop-types";
import Image from "../../../common/elements/Image";
import { Link } from "react-router-dom";

import "../style/profile-preview.scss";

const propTypes = {
	name: PropTypes.string,
};

const defaultProps = {
	name: "",
};

const ProfilePreview = ({ vc, isInterested, industry }) => {
	const linkObject = {
		pathname: "/vc",
		state: {
			name: vc.name
		},
	};

	return (
		<Link to={linkObject}>
			<div className="profile-preview">
				<div className="profile-preview-header">
					<Image
						src={require(`../../../assets/images/profile_images/${vc.name}.png`)}
						alt="Profile"
						width={90}
						height={90}
						className={"image-preview"}
					/>
					<h4 className="profile-name">{vc.name}</h4>
					{isInterested && <p className="profile-interested">Interested</p>}
				</div>
				<p>Build the next unicorn partnership with an algorithm tailored for you</p>
				<div className="fun-facts-container">
					<div className="column">
						<h6 className="facts-header">Fundraising Stage</h6>
						<h3 className="facts-content">{vc.series}</h3>
					</div>
					<div className="column">
						<h6 className="facts-header">Industry</h6>
						<h3 className="facts-content">{vc.industry}</h3>
					</div>
					<div className="column column-last">
						<h6 className="facts-header">Cap Table</h6>
						<h3 className="facts-content">{vc.capTable}</h3>
					</div>
				</div>
			</div>
		</Link>
	);
};

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
