import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const StageCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Stage</h3>
          <p>Pre-Seed</p>
        </div>
      </>
  )
}

export default StageCard;