import React from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import MiniCompanyProfile from '../components/sections/messages/MiniCompanyProfile';
import MessageBar from '../components/sections/MessageBar';

function MessageView(props) {
  return (
    <>
      <div className="container app-view">
        <MessageBar side={"left-bar"}/>
        <AppContent props={props}/>
        <MiniCompanyProfile name={"Capless"}/>
      </div>
    </>
  );
}

export default MessageView