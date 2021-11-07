import React from 'react';
import Image from '../../elements/Image';
import ActionButtons from '../../elements/ActionButtons';
import HeaderCard from './HeaderCard';
import RevenueCard from './RevenueCard';
import CapTableCard from './CapTableCard';
import StageCard from './StageCard';
import TeamSizeCard from './TeamSizeCard';
import LocationCard from './LocationCard';
import TeamMembersCard from './TeamMembersCard';
import FastFactCard from './FastFactCard';

const CompanyProfile = ({params}) => {
  if (!params) {
    params = {
      name: "Pear Products",
    }
  }
  return (
    <>
      <div className="company-profile">
        <HeaderCard params={params} />
        <div className="card-row">
          <RevenueCard classes={['profile-card', 'small-card']} />
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

export default CompanyProfile;