import React, { useState } from 'react';
import classNames from 'classnames';
import Feed from './partials/Feed';
import CompanyProfile from './partials/CompanyProfile';

const AppContent = ({currentContent}) => {

  // "Daily Feed", "Company profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed/>,
    "Company profile": <CompanyProfile/>
  };


 	const outerClasses = classNames('container-lg container-app ta-c');
  return (
    <>
      <div className={outerClasses}>
        {contentMap[currentContent]}
      </div>
    </>
  );
}

export default AppContent;