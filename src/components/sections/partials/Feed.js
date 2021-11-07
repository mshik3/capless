import React from 'react';
import ProfilePreview from '../../elements/ProfilePreview';

const Feed = () => {
  const startUps = ["Venture Standard", "Sequoia Capital", "Accel", "Kleiner Perkins", "Hiya", "Auth0", "HOVER", "Wrench", "Unite Us", "Shield AI"];
  const interested = [false, true, false, true, false, false, false, false, false, false];
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