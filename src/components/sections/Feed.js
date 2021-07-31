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
          <ProfilePreview className="container-preview-profile" name={startUps[0]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[1]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[2]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[3]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[4]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[5]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[6]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[7]}/>
          <ProfilePreview className="container-preview-profile" name={startUps[8]}/>
        </div>
      </div>
    </>
  );
}

export default Feed;