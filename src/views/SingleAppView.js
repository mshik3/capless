import React from 'react';
import classNames from 'classnames';

// Import Content
import Feed from '../components/sections/partials/Feed';
import CompanyProfile from '../components/sections/partials/CompanyProfile';

function SingleAppView(props) {
  let currentContent = props.content;
  let contentParams = props.location.state; // Parameters taken from link state

  // "Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed/>,
    "Company Profile": <CompanyProfile params={contentParams}/>
  };

 	const outerClasses = classNames('container-app');
  return (
    <>
      <div className={outerClasses}>
        {contentMap[currentContent]}
      </div>
    </>
  );
}

export default SingleAppView