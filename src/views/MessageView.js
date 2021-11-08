import React from 'react';
// import sections
import MiniCompanyProfile from '../components/sections/messages/MiniCompanyProfile';
import Conversation from '../components/sections/partials/Conversation';
import MessageBar from '../components/sections/MessageBar';

function MessageView(props) {
  let contentParams = props.location.state; // Parameters taken from link state
  return (
    <>
      <div className="container-lg message-app-view">
        <MiniCompanyProfile name={"Venture Standard"}/>
        <Conversation params={contentParams}/>
        <MessageBar/>
      </div>
    </>
  );
}

export default MessageView