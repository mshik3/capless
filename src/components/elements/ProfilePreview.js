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
    <button className="button-preview">
	    <Image
	      src={require(`./../../assets/images/profile_images/${name}.jpeg`)}
	      alt="Profile"
	      width={150}
	      height={150}
	      className={"image-preview"}/>
    </button>
  );
}

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
