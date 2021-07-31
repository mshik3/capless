import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}

const ProfilePreview = ({name}) => {
  return (
    <div className="profile-preview reveal-from-top" data-reveal-delay="200">
      <div className = "profile-preview-header">
      <Image
	      src={require(`./../../assets/images/profile_images/${name}.jpeg`)}
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
      <div className="action-buttons">
        <button className="action-button">
        <Image
          src={require(`./../../assets/images/button_images/Check.png`)}
          alt="Yes"
          className={"action-image"}/>
        </button>
        <button className="action-button">
        <Image
          src={require(`./../../assets/images/button_images/Chat.png`)}
          alt="Yes"
          className={"action-image"}/>
        </button>
        <button className="action-button">
        <Image
          src={require(`./../../assets/images/button_images/X.png`)}
          alt="Yes"
          className={"action-image"}/>
        </button>
      </div>
    </div>
  );
}

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
