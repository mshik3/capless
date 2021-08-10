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
    <div className="side-bar-section">
      <Image src={require(`./../../assets/images/side_bar_images/Messages.png`)}/>
      <p className="side-bar-name">{name}</p>
    </div>
  );
}

MessageSection.propTypes = propTypes;
MessageSection.defaultProps = defaultProps;

export default MessageSection;
