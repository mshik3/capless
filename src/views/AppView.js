import React from 'react';
// import sections
import Feed from '../components/sections/Feed';
import LeftBar from '../components/sections/LeftBar';
import RightBar from '../components/sections/RightBar';

const AppView = () => {

  return (
    <>
      <div className="container app-view">
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  );
}

export default AppView;