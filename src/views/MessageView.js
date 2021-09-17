import React from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import MiniCompanyProfile from '../components/sections/messages/MiniCompanyProfile';
import MessageBar from '../components/sections/MessageBar';

function MessageView(props) {
  return (
    <>
      <div className="container app-view">
        <MiniCompanyProfile name={"Capless"}/>
        <AppContent props={props}/>
        <MessageBar side={"right-bar"}/>
      </div>
    </>
  );
}

export default MessageView