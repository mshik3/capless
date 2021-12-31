import React from 'react';
import HeaderCard from '../companyprofile/HeaderCard';
import FundSizeCard from '../companyprofile/FundSizeCard';
import classNames from 'classnames';

const MiniCompanyProfile = ({name}) => {
  const outerClasses = classNames(`side-bar mini-company-profile`);

  return (
    <>
      <div className={outerClasses}>
        <div className = "mini-company-profile-header">
          <HeaderCard />
          <FundSizeCard classes={['profile-card', 'mini-profile-card', 'large-card']} />
        </div>
    </div>
    </>
  );
}

export default MiniCompanyProfile;