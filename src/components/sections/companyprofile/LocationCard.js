import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const LocationCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Location</h3>
          <p>Chicago</p>
        </div>
      </>
  )
}

export default LocationCard;