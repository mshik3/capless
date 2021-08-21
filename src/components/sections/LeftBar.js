import React from 'react';
import classNames from 'classnames';
import SideBarSection from '../elements/SideBarSection';

const LeftBar = ({callBack}) => {
 	const outerClasses = classNames('side-bar left-bar');
 	const options = ["Daily Feed", "Company profile", "My Profile", "Settings", "Upgrade"];
  return (
    <>
      <div className={outerClasses}>
        <div>
          {options.map((option) => {
            return <SideBarSection name={option} callBack={callBack}/>
          })}
        </div>
      </div>
    </>
  );
}

export default LeftBar;