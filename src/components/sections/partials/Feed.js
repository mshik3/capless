import React from 'react';
import ProfilePreview from '../../elements/ProfilePreview';

const Feed = () => {
  const VCs = ["Venture Standard", "Sequoia Capital", "Accel", "Kleiner Perkins", "Hiya", "Auth0", "HOVER", "Wrench", "Unite Us", "Shield AI"];
  const series = ["Series A", "Series A", "Series A", "Series A", "Series A", "Series A", "Series A", "Series A", "Pre-Seed", "Pre-Seed"];
  const industries = ["Agritech", "Agritech", "Agritech", "Agritech", "Agritech", "Agritech", "Tech", "Tech", "Biotech", "Fintech"];
  const revenues = ["$85M", "$35M", "$25M", "$25M", "$30M", "$20M", "$35M", "$20M", "$3M", "$2M"];
  const interested = [true, true, false, true, false, false, false, false, false, false];
  return (
    <>
      <div className="profile-preview-grid">
        {VCs.map((startUpName, index) => {
          return <ProfilePreview className="container-preview-profile" name={startUpName} isInterested={interested[index]} series={series[index]} industry={industries[index]} revenue={revenues[index]}/>
        })}
      </div>
    </>
  );
}

export default Feed;