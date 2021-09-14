import React from 'react';
import Image from '../../elements/Image';
import classNames from 'classnames';

const MiniCompanyProfile = ({name}) => {
  const outerClasses = classNames(`side-bar right-bar`);

  return (
    <>
      <div className={outerClasses}>
        <div className="mini-company-profile">
            <div className = "mini-company-profile-header">
                <Image
                src={require(`./../../../assets/images/profile_images/${name}.jpeg`)}
                alt="Profile"
                width={60}
                height={60}
                className={"image-preview"}/>
                <h4 className="profile-name">{name}</h4>
            </div>
            <p>Build the next unicorn partnership with an algorithm tailored for you</p>
            <div className="fun-facts-container">
                <div className="column">
                    <h5 className="facts-header">Series A</h5>
                </div>
                <div className="column">
                    <h5 className="facts-header">Bio Tech</h5>
                </div>
                <div className="column column-last">
                    <h5 className="facts-header">$20 Million</h5>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default MiniCompanyProfile;