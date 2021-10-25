import React from 'react';
import Image from '../../elements/Image';

const HeaderCard = ({params}) => {
  if (!params) {
    params = {
      name: "Capless",
    }
  }
  return (
      <>
        <div className = "profile-card">
        <div className = "company-profile-header">
          <Image className={"company-profile-image"} src={require(`../../../assets/images/profile_images/${params.name}.jpeg`)}/>
          <h1 className="company-profile-name">{params.name}</h1>
        </div>
        <h2 className="card-header">About Us</h2>
        <p>Capless was born in 2021 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 900 million guest arrivals in almost every country across the globe. Every day, Hosts offer one-of-a-kind stays and unique Experiences that make it possible for guests to experience the world in a more authentic, connected way.</p>
        </div>
      </>
  )
}

export default HeaderCard;