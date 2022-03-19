import React from "react";
// import sections
import MiniUserProfile from "./components/MiniUserProfile";
import Conversation from "./components/Conversation";
import MessageBar from "./components/MessageBar";
import "./style/message-appview.scss";

function MessageView(props) {
	let contentParams = props.location.state; // Parameters taken from link state
	return (
		<>
			<div className="container-app-lg message-app-view">
				<MiniUserProfile name={"Venture Standard"} />
				<Conversation params={contentParams} />
				<MessageBar />
			</div>
		</>
	);
}

export default MessageView;
