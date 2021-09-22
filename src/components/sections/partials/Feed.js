import React, { useState } from 'react';
import classNames from 'classnames';
import ProfilePreview from '../../elements/ProfilePreview';

const Feed = () => {
 	const startUps = ["Capless", "AskNed", "BottleUp", "Elevatr", "EverCharg", "Flash", "GreenSpork", "Iterate", "TeamSync"];
  const interested = [false, true, false, true, false, false, false, false, false];
  return (
    <>
      <div className="profile-preview-grid">
        {startUps.map((startUpName, index) => {
          return <ProfilePreview className="container-preview-profile" name={startUpName} isInterested={interested[index]}/>
        })}
      </div>
    </>
  );
}

export default Feed;