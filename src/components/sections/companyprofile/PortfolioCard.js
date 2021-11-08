import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const PortfolioCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Portfolio</h3>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Portfolio.png`)} width="60%"/>
        </div>
      </>
  )
}

export default PortfolioCard;