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
    const [isMatchShown, setIsMatchShown] = useState(false);
    const [isAlreadyTalkingShown, setIsAlreadyTalkingShown] = useState(false);
    const [isDenyShown, setIsDenyShown] = useState(false);

    return (
        <div className="action-buttons">
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsMatchShown(true)} onMouseLeave={() => setIsMatchShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/check.svg`)}
                    alt="Yes"
                    className={"action-image"}/>
                </button>
                {isMatchShown && (<div className="action-button-hover-text">
                    <p>Match</p>
                </div>)}
            </div>
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsAlreadyTalkingShown(true)} onMouseLeave={() => setIsAlreadyTalkingShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/arrows-right-left.svg`)}
                    alt="Already Talking"
                    className={"action-image"}/>
                </button>
                {isAlreadyTalkingShown && (<div className="action-button-hover-text">
                    <p>Already Talking</p>
                </div>)}
            </div>
            <div className="action-button action-button-hover-parent" onMouseEnter={() => setIsDenyShown(true)} onMouseLeave={() => setIsDenyShown(false)}>
                <button className="action-button-image">
                    <Image
                    src={require(`./../../assets/images/button_images/cross.svg`)}
                    alt="No"
                    className={"action-image"}/>
                </button>
                {isDenyShown && (<div className="action-button-hover-text">
                    <p>Deny</p>
                </div>)}
            </div>
        </div>
    );
}

ActionButtons.propTypes = propTypes;
ActionButtons.defaultProps = defaultProps;

export default ActionButtons;