import React from 'react';
import classNames from 'classnames';
import SideBarSection from '../elements/SideBarSection';

const ContentBar = ({side}) => {
  const outerClasses = classNames(`side-bar ${side}`);
  const paths = ["/feed", "/company", "/profile", "/settings", "/upgrade"];
  const options = ["Daily Feed", "Company Profile", "My Profile", "Settings", "Upgrade"];

  return (
    <>
      <div className={outerClasses}>
        <div>
          {options.map((option, index) => {
            return <SideBarSection name={option} path={paths[index]}/>
          })}
        </div>
      </div>
    </>
  );
}

export default ContentBar;