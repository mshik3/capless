import React from 'react';
import Image from '../../../common/elements/Image';
import classNames from 'classnames';

const PortfolioCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Portfolio</h3>
          <div className='card-image-container'>
            <Image className="card-image" src={require(`../../../assets/images/company_cards_images/Portfolio.png`)} width="63%"/>
          </div>
        </div>
      </>
  )
}

export default PortfolioCard;