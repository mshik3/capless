import React from "react";
import Image from "../../../common/elements/Image";
import classNames from "classnames";

const TeamMembersCard = ({ classes, teamMembers }) => {
	return (
		<>
			<div className={classNames(classes)}>
				<h2 className="card-header">Team Members</h2>
				<div className="team-members-container">
					{teamMembers.map((teamMember) => {
						return (
							<div className="team-column">
								<Image
									className={"team-image"}
									src={require(`../../../assets/images/team_images/${teamMember.name}.jpeg`)}
								/>
								<p className="member-info">{teamMember.name}</p>
								<p className="member-info">
									<b>{teamMember.role}</b>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TeamMembersCard;
