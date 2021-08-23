import React from 'react';
import Image from '../../elements/Image';
import ActionButtons from '../../elements/ActionButtons';

const CompanyProfile = () => {
  return (
    <>
      <div className="company-profile">
        <div className = "company-profile-header">
          <Image className={"company-profile-image"} src={require(`../../../assets/images/profile_images/Capless.jpeg`)}/>
          <h1 className="company-profile-name">Capless</h1>
        </div>
        <h2 className="divider">About Us</h2>
        <p>Capless was born in 2021 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 900 million guest arrivals in almost every country across the globe. Every day, Hosts offer one-of-a-kind stays and unique Experiences that make it possible for guests to experience the world in a more authentic, connected way.</p>
        <h2 className="divider">Fast Facts</h2>
        <div className="fun-facts-container">
          <div className="column">
            <h5 className="facts-header">5.6 million</h5>
            <p className="facts-content">active listings worldwide (as of Sept. 30, 2020)</p>
          </div>
          <div className="column">
            <h5 className="facts-header">100,000</h5>
            <p className="facts-content">cities with active Airbnb listings (as of Sept. 30, 2020)</p>
          </div>
          <div className="column column-last">
            <h5 className="facts-header">220+</h5>
            <p className="facts-content">countries and regions with Airbnb listings (as of Sept. 30, 2020)</p>
          </div>
        </div>
        <h2 className="divider">Team Members</h2>
        <div className="team-members-container">
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Abhinav.jpeg`)}/>
            <p className="member-info">Abhi Subramaniam</p>
            <p className="member-info"><b>CEO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Brian.jpeg`)}/>
            <p className="member-info">Brian Thompson</p>
            <p className="member-info"><b>CDO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <Image className={"team-image"} src={require(`../../../assets/images/team_images/Mustafa.jpeg`)}/>
            <p className="member-info">Mustafa Shikora</p>
            <p className="member-info"><b>CTO & Co-Founder</b></p>
          </div>
        </div>
        <div className="action-bar">
          <ActionButtons/>
        </div>
      </div>
    </>
  );
}

export default CompanyProfile;