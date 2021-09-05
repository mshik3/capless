import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}

const SideBarSection = ({name, path}) => {
  return (
    <Link className="side-bar-section" to={path}>
      <Image src={require(`./../../assets/images/side_bar_images/Settings.jpeg`)}/>
      <p className="side-bar-name">{name}</p>
    </Link>
  );
}

SideBarSection.propTypes = propTypes;
SideBarSection.defaultProps = defaultProps;

export default SideBarSection;
