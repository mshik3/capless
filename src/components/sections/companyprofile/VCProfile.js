import React from 'react';
import Image from '../../elements/Image';
import ActionButtons from '../../elements/ActionButtons';
import HeaderCard from './HeaderCard';
import FundSizeCard from './FundSizeCard';
import CapTableCard from './CapTableCard';
import StageCard from './StageCard';
import TeamSizeCard from './TeamSizeCard';
import LocationCard from './LocationCard';
import TeamMembersCard from './TeamMembersCard';
import FastFactCard from './FastFactCard';

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
          <CapTableCard classes={['profile-card', 'medium-card', 'card-last']} />
        </div>
        <div className="card-row">
          <StageCard classes={['profile-card', 'large-card']} />
        </div>
        <div className="card-row">
          <LocationCard classes={['profile-card', 'medium-card']} />
          <TeamSizeCard classes={['profile-card', 'small-card', 'card-last']} />
        </div>
        <div className="card-row">
          <TeamMembersCard classes={['profile-card', 'large-card']} />
        </div>
        <div className="card-row">
          <FastFactCard classes={['profile-card', 'small-card']} header="130 " content="Retail Partnerships nationally"/>
          <FastFactCard classes={['profile-card', 'small-card']} header="6" content="Cities with active partnerships"/>
          <FastFactCard classes={['profile-card', 'small-card', 'card-last']} header="1 Million+" content="People served nationally" />
        </div>
        <div className="action-bar">
          <ActionButtons/>
        </div>
      </div>
    </>
  );
}

export default VCProfile;