import React from 'react';
import classNames from 'classnames';

// Import Content
import Feed from '../app/feed/Feed';
import CompanyProfile from '../app/companyprofile/CompanyProfile';
import VCProfile from '../app/companyprofile/VCProfile';
import Settings from '../app/settings/Settings';

function SingleAppView(props) {
  let currentContent = props.content;
  let contentParams = props.location.state; // Parameters taken from link state

  // "Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"
  const contentMap = {
    "Daily Feed": <Feed/>,
    "Company Profile": <CompanyProfile params={contentParams}/>,
    "VC Profile": <VCProfile params={contentParams}/>,
    "Settings": <Settings/>
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