import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const TeamMembersVCCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
        <h2 className="card-header">Team Members</h2>
        <div className="team-members-container">
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Rebecca Sanford.jpeg`)}/>
            <p className="member-info">Rebecca Sandford</p>
            <p className="member-info"><b>Partner</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Tony Morrow.jpeg`)}/>
            <p className="member-info">Tony Morrow</p>
            <p className="member-info"><b>Partner</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Rodney Clark.jpeg`)}/>
            <p className="member-info">Rodney Clark</p>
            <p className="member-info"><b>Associate</b></p>
          </div>
        </div>
        </div>
      </>
  )
}

export default TeamMembersVCCard;