import React, {Component} from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import LeftBar from '../components/sections/LeftBar';
import RightBar from '../components/sections/RightBar';

function AppView(props) {
  return (
    <>
      <div className="container app-view">
        <LeftBar/>
        <AppContent props={props}/>
        <RightBar/>
      </div>
    </>
  );
}

export default AppView