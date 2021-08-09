import React from 'react';
// import sections
import Feed from '../components/sections/Feed';
import LeftBar from '../components/sections/LeftBar';

const AppView = () => {

  return (
    <>
      <div>
        <LeftBar/>
        <Feed/>
      </div>
    </>
  );
}

export default AppView;