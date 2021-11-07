import React from 'react';
import classNames from 'classnames';
import MessageSection from '../elements/MessageSection';

const MessageBar = () => {
 	const outerClasses = classNames(`side-bar message-bar`);
 	const names = ["Carl Incerto", "Grant Morris", "Raaji Patel", "James Smith", "Maria Garcia", "David Jackson", "Robert Perez", "Rebecca Sanford", "Mark Lewis", "Anthony Wright", "Ashley Nguyen", "Andrew Rivera"];
 	const companies = ["SV Angel", "Sequoia Capital", "Accel", "Kleiner Perkins", "Hiya", "Auth0", "HOVER", "Venture Standard", "Wrench", "Unite Us", "Shield AI", "Bellhop"];
  return (
    <>
      <div className={outerClasses}>
        <div>
          {names.map((name, index) => {
            return <MessageSection name={name} company={companies[index]}/>
          })}
        </div>
      </div>
    </>
  );
}

export default MessageBar;