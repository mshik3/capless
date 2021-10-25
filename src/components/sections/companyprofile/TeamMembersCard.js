import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const TeamMembersCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
        <h2 className="card-header">Team Members</h2>
        <div className="team-members-container">
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Abhinav.jpeg`)}/>
            <p className="member-info">Abhi Subramaniam</p>
            <p className="member-info"><b>CEO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Brian.jpeg`)}/>
            <p className="member-info">Brian Thompson</p>
            <p className="member-info"><b>CDO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Mustafa.jpeg`)}/>
            <p className="member-info">Mustafa Shikora</p>
            <p className="member-info"><b>CTO & Co-Founder</b></p>
          </div>
        </div>
        </div>
      </>
  )
}

export default TeamMembersCard;