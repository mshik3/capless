import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const propTypes = {
    name: PropTypes.string
}

const defaultProps = {
    name: ''
}

const ActionButtons = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="action-buttons">
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/check.svg`)}
                    alt="Yes"
                    className={"action-image"}/>
                </button>
                {isShown && (<div className="action-button-hover-text">
                    <p>Match</p>
                </div>)}
            </div>
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/arrows-right-left.svg`)}
                    alt="Already Talking"
                    className={"action-image"}/>
                </button>
                {isShown && (<div className="action-button-hover-text">
                    <p>Already Talking</p>
                </div>)}
            </div>
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/cross.svg`)}
                    alt="No"
                    className={"action-image"}/>
                </button>
                {isShown && (<div className="action-button-hover-text">
                    <p>Deny</p>
                </div>)}
            </div>
        </div>
    );
}

ActionButtons.propTypes = propTypes;
ActionButtons.defaultProps = defaultProps;

export default ActionButtons;