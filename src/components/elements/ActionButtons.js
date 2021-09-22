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
                src={require(`./../../assets/images/button_images/check.svg`)}
                alt="Yes"
                className={"action-image"}/>
            </button>
            <button className="action-button">
                <Image
                src={require(`./../../assets/images/button_images/arrows-right-left.svg`)}
                alt="Already Talking"
                className={"action-image"}/>
            </button>
            <button className="action-button">
                <Image
                src={require(`./../../assets/images/button_images/cross.svg`)}
                alt="No"
                className={"action-image"}/>
            </button>
        </div>
    );
}

ActionButtons.propTypes = propTypes;
ActionButtons.defaultProps = defaultProps;

export default ActionButtons;