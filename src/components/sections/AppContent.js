import React from 'react';
import classNames from 'classnames';
import Feed from './partials/Feed';
import CompanyProfile from './partials/CompanyProfile';

const AppContent = ({props}) => {
  let currentContent = props.content;
  let contentParams = props.computedMatch.params; // Parameters taken from URL

  // "Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed/>,
    "Company Profile": <CompanyProfile params={contentParams}/>
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