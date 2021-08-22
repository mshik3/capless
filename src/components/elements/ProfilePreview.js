import React from 'react';
import PropTypes from 'prop-types';
import Image from '../elements/Image';
import ActionButtons from '../elements/ActionButtons';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}


const ProfilePreview = ({name, isInterested, callBack}) => {
  return (
    <div className="profile-preview" onClick={() => callBack("Company profile")}>
      <div className = "profile-preview-header">
      <Image
        src={require(`./../../assets/images/profile_images/${name}.jpeg`)}
        alt="Profile"
        width={60}
        height={60}
        className={"image-preview"}/>
        <h4 className="profile-name">{name}</h4>
        {isInterested &&
          <p className="profile-interested">Interested</p>
        }
      </div>
      <p>Build the next unicorn partnership with an algorithm tailored for you</p>
      <div className="fun-facts-containe">
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
      <ActionButtons/>
    </div>
  );
}

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
