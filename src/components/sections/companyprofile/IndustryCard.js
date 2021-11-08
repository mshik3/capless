import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const IndustryCard = ({classes, header, content}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Industry</h3>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Industry.png`)} width="60%"/>
          <p className="center-text">Agritech</p>
        </div>
      </>
  )
}

export default IndustryCard;