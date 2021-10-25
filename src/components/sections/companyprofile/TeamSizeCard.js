import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const TeamSizeCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Team Size</h3>
          <p>200+ employees</p>
        </div>
      </>
  )
}

export default TeamSizeCard;