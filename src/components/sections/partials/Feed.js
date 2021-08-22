import React, { useState } from 'react';
import classNames from 'classnames';
import ProfilePreview from '../../elements/ProfilePreview';

const Feed = ({callBack}) => {
 	const startUps = ["Capless", "AskNed", "BottleUp", "Elevatr", "EverCharg", "Flash", "GreenSpork", "Iterate", "TeamSync"];
  const interested = [false, true, false, true, false, false, false, false, false];
  return (
    <>
      <div>
        {startUps.map((startUpName) => {
          return <ProfilePreview callBack={callBack} className="container-preview-profile" name={startUpName} isInterested={interested[index]}/>
        })}
      </div>
    </>
  );
}

export default Feed;