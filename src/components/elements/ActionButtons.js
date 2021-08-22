import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const propTypes = {
    name: PropTypes.string
}

const defaultProps = {
    name: ''
}

const ActionButtons = () => {
    return (
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
    );
}

ActionButtons.propTypes = propTypes;
ActionButtons.defaultProps = defaultProps;

export default ActionButtons;