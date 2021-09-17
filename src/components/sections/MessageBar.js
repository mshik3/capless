import React from 'react';
import classNames from 'classnames';
import MessageSection from '../elements/MessageSection';

const MessageBar = ({side}) => {
 	const outerClasses = classNames(`side-bar ${side}`);
 	const names = ["Brian Thompson", "Abhinav Subramaniam", "Brad Pitt", "Jessica Jones", "Mustafa Shikora"];
 	const companies = ["SV Angel", "Sequoia Capital", "Accel", "Kleiner Perkins", "Andreessen Horowitz"];
  return (
    <>
      <div className={outerClasses}>
        <div className={"ad"}>
          <p>This is an ad</p>
        </div>
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