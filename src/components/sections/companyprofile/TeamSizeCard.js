import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const TeamSizeCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Team Size</h3>
          <p>200+ employees</p>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Team.png`)} width="70%"/>
        </div>
      </>
  )
}

export default TeamSizeCard;