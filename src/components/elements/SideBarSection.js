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
  // Right now we are passing in the same state to all paths but it's only needed for company.
  // Should make a path -> state mapping later if needed
  const linkObject = {
    pathname: path,
    state: {
      name: "Capless"
    }
  }

  return (
    <Link className="side-bar-section" to={linkObject}>
      <Image src={require(`./../../assets/images/side_bar_images/Settings.jpeg`)}/>
      <p className="side-bar-name">{name}</p>
    </Link>
  );
}

SideBarSection.propTypes = propTypes;
SideBarSection.defaultProps = defaultProps;

export default SideBarSection;
