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
          <Image className={"company-profile-image"} src={require(`../../../assets/images/profile_images/${params.name}.png`)}/>
          <h1 className="company-profile-name">{params.name}</h1>
        </div>
        <h2 className="card-header">About Us</h2>
        <p>Pear Products is a software technology company focused on providing the solution to the world's lack of accessibility to natural, non-modified, and locally sourced fruits and vegetables. Pear aims to tackle food shortage with logistic analysis and algorithmic supply chain orientation. Learn more about Pear below!</p>
        </div>
      </>
  )
}

export default HeaderCard;