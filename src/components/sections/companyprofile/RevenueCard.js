import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const RevenueCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Annual Revenue</h3>
          <p><b>$10M / year</b></p>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Revenue.png`)} width="50%"/>
        </div>
      </>
  )
}

export default RevenueCard;