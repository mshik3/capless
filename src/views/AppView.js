import React from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import ContentBar from '../components/sections/ContentBar';
import MessageBar from '../components/sections/MessageBar';

function AppView(props) {
  return (
    <>
      <div className="container app-view">
        <ContentBar side={"left-bar"}/>
        <AppContent props={props}/>
        <MessageBar side={"right-bar"}/>
      </div>
    </>
  );
}

export default AppView