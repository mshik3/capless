import React from 'react';
import Image from '../../../common/elements/Image';
import classNames from 'classnames';

const CapTableCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Cap Table</h3>
          <Image className="card-image" src={require(`../../../assets/images/company_cards_images/CapTable.png`)} width="80%"/>
        </div>
      </>
  )
}

export default CapTableCard;