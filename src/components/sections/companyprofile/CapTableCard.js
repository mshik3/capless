import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const CapTableCard = ({classes}) => {
  return (
      <>
        <div className = {classNames(classes)}>
          <h3 className="card-header">Cap Table</h3>
          <p>The cap table</p>
        </div>
      </>
  )
}

export default CapTableCard;