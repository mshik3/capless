import React from 'react';
import HeaderCard from './components/HeaderCard';
import FundSizeCard from './components/FundSizeCard';
import PortfolioCard from './components/PortfolioCard';
import TeamSizeCard from './components/TeamSizeCard';
import LocationCard from './components/LocationCard';
import TeamMembersVCCard from './components/TeamMembersVCCard';
import IndustryCard from './components/IndustryCard';
import './style/company-profile.scss'

const VCProfile = (props) => {
  let params = {
    name: "Venture Standard",
    aboutUs: "Venture Standard is an agriculture technology focused investment firm with a history of providing its portfolio companies with a strong and dependable network, future funding options, and access to a wide talent pool to work with. Learn more about Venture Standard's mission below!"
  }
  if (props) {
    params = props.location.state;
  }
  return (
    <div className='container-app'>
      <div className="company-profile">
        <HeaderCard params={params} />
        <div className="card-row">
          <FundSizeCard classes={['profile-card', 'small-card']} />
          <PortfolioCard classes={['profile-card', 'medium-card', 'card-last']} />
        </div>
        <div className="card-row">
          <LocationCard classes={['profile-card', 'medium-card']} />
          <TeamSizeCard classes={['profile-card', 'small-card', 'card-last']} />
        </div>
        <div className="card-row">
          <IndustryCard classes={['profile-card', 'small-card']} header="Agritech" content="Industry"/>
          <TeamMembersVCCard classes={['profile-card', 'medium-card', 'card-last']} />
        </div>
      </div>
    </div>
  );
}

export default VCProfile;