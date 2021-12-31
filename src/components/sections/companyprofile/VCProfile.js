import React from 'react';
import ActionButtons from '../../elements/ActionButtons';
import HeaderCard from './HeaderCard';
import FundSizeCard from './FundSizeCard';
import PortfolioCard from './PortfolioCard';
import TeamSizeCard from './TeamSizeCard';
import LocationCard from './LocationCard';
import TeamMembersVCCard from './TeamMembersVCCard';
import IndustryCard from './IndustryCard';

const VCProfile = ({params}) => {
  if (!params) {
    params = {
      name: "Venture Standard",
      aboutUs: "Venture Standard is an agriculture technology focused investment firm with a history of providing its portfolio companies with a strong and dependable network, future funding options, and access to a wide talent pool to work with. Learn more about Venture Standard's mission below!"
    }
  }
  return (
    <>
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
        <div className="action-bar">
          <ActionButtons/>
        </div>
      </div>
    </>
  );
}

export default VCProfile;