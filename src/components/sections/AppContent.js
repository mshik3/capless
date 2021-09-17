import React from 'react';
import classNames from 'classnames';

// Import Content
import Feed from './partials/Feed';
import CompanyProfile from './partials/CompanyProfile';
import Conversation from './partials/Conversation';

const AppContent = ({props}) => {
  let currentContent = props.content;
  let contentParams = props.location.state; // Parameters taken from link state

  // "Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed/>,
    "Company Profile": <CompanyProfile params={contentParams}/>,
    "Conversation": <Conversation params={contentParams}/>
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