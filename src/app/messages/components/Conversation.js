import React, { useEffect, useState } from "react";
import Image from "../../../common/elements/Image";
import "../style/conversation.scss";

// Amplify
import "@aws-amplify/pubsub";
import API, { graphqlOperation } from "@aws-amplify/api";
import { messagesByChannelID } from "../../../graphql/queries";
import { onCreateMessage } from "../../../graphql/subscriptions";
import { createMessage } from "../../../graphql/mutations";
import { Auth } from "@aws-amplify/auth";

const Conversation = ({ params }) => {
	if (!params) {
		params = {
			name: "Rebecca Sanford",
			company: "Venture Standard",
		};
	}

	// Initialize state
	const [companyRep, updateCompanyRep] = useState(params.name);
	const [company, updateCompany] = useState(params.company);
	const [visitedCompanies, setVisitedCompanies] = useState(new Set());
	// Threads structure maps companies to specific conversations with those companies: {company: [{name: "", message: ""}]}
	const [threads, updateThreads] = useState({});
	// Initialize user info state
	const [userInfo, setUserInfo] = useState(null);

	// Update threads state
	const appendToThreads = (items) => {
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const author = item.author;
			const body = item.body;
			if (!threads[company]) {
				threads[company] = [];
			}
			// Append text input to thread for current company
			threads[company] = [...threads[company], { author, body }];
		}
		updateThreads({
			...threads,
		});
	};

	// Fetch Auth User
	useEffect(() => {
		Auth.currentUserInfo().then((userInfo) => {
			setUserInfo(userInfo);
		});
	}, []);

	// Fetching Messages
	useEffect(() => {
		if (!visitedCompanies.has(company)) {
			API.graphql(
				graphqlOperation(messagesByChannelID, {
					channelID: company,
					sortDirection: "ASC",
				})
			).then((response) => {
				const items = response.data?.messagesByChannelID?.items;
				if (items) {
					appendToThreads(items);
				}
				visitedCompanies.add(company);
				setVisitedCompanies(visitedCompanies);
			});
		}
	}, [company, visitedCompanies]);

	// Subscribing to new Messages
	useEffect(() => {
		const subscription = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
			next: (event) => {
				appendToThreads([event.value.data.onCreateMessage]);
			},
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [threads]);

	// Update state when params change from new URL
	if (params.name !== companyRep) {
		updateCompanyRep(params.name);
	}
	if (params.company !== company) {
		updateCompany(params.company);
	}

	const onKeyPress = async (event) => {
		// If enter is pressed
		if (event.keyCode === 13) {
			const messageBody = event.target.value;
			event.preventDefault();
			document.getElementById("text-bar").value = "";

			const input = {
				channelID: company,
				author: userInfo.attributes.email,
				body: messageBody.trim(),
			};

			try {
				await API.graphql(graphqlOperation(createMessage, { input }));
			} catch (error) {
				console.warn(error);
			}

			// Initialize threads[company] if empty
			if (!threads[company]) {
				threads[company] = [];
			}
		}
	};

	return (
		<>
			<div className="conversation">
				<div className="conversation-header">
					<Image src={require(`../../../assets/images/message_contacts/${companyRep}.jpeg`)} />
					<p className="name">{companyRep}</p>
					<p className="company">{company}</p>
				</div>
				{threads[company] &&
					threads[company].map((thread) => {
						return (
							<>
								<div className="conversation-section">
									<p className="name">{thread.author}</p>
									<p className="message">{thread.body}</p>
								</div>
							</>
						);
					})}
				<textarea rows="4" id="text-bar" placeholder="Write a message..." onKeyDown={onKeyPress}></textarea>
			</div>
		</>
	);
};

export default Conversation;
