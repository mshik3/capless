import React from 'react';
import Image from '../../../common/elements/Image';
import ActionButtons from './ActionButtons';

const HeaderCard = ({params, isMainProfile=true}) => {
  if (!params) {
    params = {
      name: "Venture Standard",
      aboutUs: "Venture Standard is an agriculture technology focused investment firm with a history of providing its portfolio companies with a strong and dependable network, future funding options, and access to a wide talent pool to work with. Learn more about Venture Standard's mission below!"
    }
  }
  return (
      <>
        <div className = "profile-card">
        <div className = "company-profile-header">
          {isMainProfile && <Image className={"company-profile-image"} src={require(`../../../assets/images/profile_images/${params.name}.png`)}/>}
          <h1 className="company-profile-name">{params.name}</h1>
        </div>
        <h2 className="card-header">About Us</h2>
        <p>{params.aboutUs}</p>
        {isMainProfile && <ActionButtons/>}
        </div>
      </>
  )
}

export default HeaderCard;