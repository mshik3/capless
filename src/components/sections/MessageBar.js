import React from 'react';
import classNames from 'classnames';
import MessageSection from '../elements/MessageSection';

const MessageBar = () => {
 	const outerClasses = classNames(`side-bar message-bar`);
 	const names = ["Mustafa Shikora", "Grant Morris", "Abhi Subramaniam", "James Smith", "Maria Garcia", "David Jackson", "Robert Perez", "Susan Harris", "Mark Lewis", "Anthony Wright", "Ashley Nguyen", "Paul Nelson", "Andrew Rivera"];
 	const companies = ["SV Angel", "Sequoia Capital", "Accel", "Kleiner Perkins", "Hiya", "Auth0", "HOVER", "Turing", "Wrench", "Unite Us", "Shield AI", "Sense", "Bellhop"];
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