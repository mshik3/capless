import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const RevenueCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Annual Revenue</h3>
          <h4 className="revenue-info">$10M</h4>
        </div>
      </>
  )
}

export default RevenueCard;