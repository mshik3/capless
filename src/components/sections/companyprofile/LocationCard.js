import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const LocationCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Location</h3>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Location.png`)} width="80%"/>
        </div>
      </>
  )
}

export default LocationCard;