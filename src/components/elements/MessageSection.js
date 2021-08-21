import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}

const MessageSection = ({name}) => {
  return (
    <button className="side-bar-section">
      <Image src={require(`./../../assets/images/side_bar_images/Messages.png`)}/>
      <p className="side-bar-name">{name}</p>
    </button>
  );
}

MessageSection.propTypes = propTypes;
MessageSection.defaultProps = defaultProps;

export default MessageSection;
