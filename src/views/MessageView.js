import React from 'react';
// import sections
import MiniCompanyProfile from '../app/messages/components/MiniCompanyProfile';
import Conversation from '../app/messages/Conversation';
import MessageBar from '../app/messages/components/MessageBar';
import '../app/messages/style/message-appview.scss';

function MessageView(props) {
  let contentParams = props.location.state; // Parameters taken from link state
  return (
    <>
      <div className="container-app-lg message-app-view">
        <MiniCompanyProfile name={"Venture Standard"}/>
        <Conversation params={contentParams}/>
        <MessageBar/>
      </div>
    </>
  );
}

export default MessageView