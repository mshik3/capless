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

const MessageSection = ({name, company}) => {
  const linkObject = {
    pathname: "/messages",
    state: {
      name,
      company
    }
  }

  return (
    <Link className="side-bar-section" to={linkObject}>
      <Image src={require(`./../../assets/images/side_bar_images/Messages.png`)}/>
      <p className="side-bar-name">{name}</p>
    </Link>
  );
}

MessageSection.propTypes = propTypes;
MessageSection.defaultProps = defaultProps;

export default MessageSection;
