import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const StageCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Stage</h3>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Stage.png`)} width="60%"/>
        </div>
      </>
  )
}

export default StageCard;