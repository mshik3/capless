import React from "react";
import Image from "../../../common/elements/Image";
import { Link } from "react-router-dom";
import classNames from "classnames";

const TeamMembersCard = ({ classes, teamMembers, companyName, companyPath }) => {
	return (
		<>
			<div className={classNames(classes)}>
				<h2 className="card-header">Team Members</h2>
				<div className="team-members-container">
					{teamMembers.map((teamMember) => {
						let userLinkObject = {
							pathname: "/profile",
							state: {
								name: teamMember.name,
								companyName,
								companyPath
							}
						};
						return (
							<div className="team-column">
								<Link className={"company-profile-link"} to={userLinkObject}>
									<Image
										className={"team-image"}
										src={require(`../../../assets/images/team_images/${teamMember.name}.jpeg`)}
									/>
									<p className="member-info">{teamMember.name}</p>
									<p className="member-info">
										<b>{teamMember.role}</b>
									</p>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TeamMembersCard;
