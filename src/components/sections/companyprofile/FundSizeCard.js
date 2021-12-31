import React from 'react';
import classNames from 'classnames';

const RevenueCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Fund Size</h3>
          <h4 className="revenue-info">$85M</h4>
        </div>
      </>
  )
}

export default RevenueCard;