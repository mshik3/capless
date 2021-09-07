import React from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import ContentBar from '../components/sections/ContentBar';
import MessageBar from '../components/sections/MessageBar';

function MessageView(props) {
  return (
    <>
      <div className="container app-view">
        <MessageBar side={"left-bar"}/>
        <AppContent props={props}/>
        <ContentBar side={"right-bar"}/>
      </div>
    </>
  );
}

export default MessageView