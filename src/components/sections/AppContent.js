import React, { useState } from 'react';
import classNames from 'classnames';
import Feed from './partials/Feed';
import CompanyProfile from './partials/CompanyProfile';

const AppContent = ({currentContent, callBack}) => {

  // "Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed callBack={callBack}/>,
    "Company Profile": <CompanyProfile/>
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