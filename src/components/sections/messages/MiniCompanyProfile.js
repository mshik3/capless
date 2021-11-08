import React from 'react';
import HeaderCard from '../companyprofile/HeaderCard';
import classNames from 'classnames';

const MiniCompanyProfile = ({name}) => {
  const outerClasses = classNames(`side-bar mini-company-profile`);

  return (
    <>
      <div className={outerClasses}>
        <div className = "mini-company-profile-header">
          <HeaderCard />
        </div>
    </div>
    </>
  );
}

export default MiniCompanyProfile;