import React, { useState } from 'react';
import classNames from 'classnames';
import ProfilePreview from '../elements/ProfilePreview';

const Feed = () => {
 	const outerClasses = classNames('container-sm container-feed ta-c');
 	const startUps = ["Capless", "AskNed", "BottleUp", "Elevatr", "EverCharg", "Flash", "GreenSpork", "Iterate", "TeamSync"];
  return (
    <>
      <div className={outerClasses}>
        <h3>Your daily feed</h3>
        <div>
          {startUps.map((startUpName) => {
            return <ProfilePreview className="container-preview-profile" name={startUpName}/>
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;