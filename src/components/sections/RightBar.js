import React from 'react';
import classNames from 'classnames';
import MessageSection from '../elements/MessageSection';

const RightBar = () => {
 	const outerClasses = classNames('side-bar right-bar');
 	const messages = ["SV Angel", "Sequoia Capital", "Accel", "Kleiner Perkins", "Andreessen Horowitz"];
  return (
    <>
      <div className={outerClasses}>
        <div className={"ad"}>
          <p>This is an ad</p>
        </div>
        <div>
          {messages.map((option) => {
            return <MessageSection name={option}/>
          })}
        </div>
      </div>
    </>
  );
}

export default RightBar;