import React, { useState } from 'react';
import classNames from 'classnames';
import ProfilePreview from '../../elements/ProfilePreview';

const Feed = () => {
 	const startUps = ["Capless", "AskNed", "BottleUp", "Elevatr", "EverCharg", "Flash", "GreenSpork", "Iterate", "TeamSync"];
  return (
    <>
      <div>
        {startUps.map((startUpName) => {
          return <ProfilePreview className="container-preview-profile" name={startUpName}/>
        })}
      </div>
    </>
  );
}

export default Feed;