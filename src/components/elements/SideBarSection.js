import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}

const SideBarSection = ({name}) => {
  return (
    <div className="side-bar-section">
      <Image src={require(`./../../assets/images/side_bar_images/Settings.jpeg`)}/>
      <p className="side-bar-name">{name}</p>
    </div>
  );
}

SideBarSection.propTypes = propTypes;
SideBarSection.defaultProps = defaultProps;

export default SideBarSection;
