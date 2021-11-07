import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const TeamSizeCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Team Size</h3>
          <h4 className="team-size-info">20-50</h4>
        </div>
      </>
  )
}

export default TeamSizeCard;