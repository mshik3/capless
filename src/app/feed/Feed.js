import React from "react";
import ProfilePreview from "./components/ProfilePreview";
import { getFeed } from "./api/GetFeed";
import "./style/profile-preview.scss";

const interested = [true, true, false, true, false, false, false, false, false, false];

class Feed extends React.Component {
	constructor(props) {
		super();
		const urlParams = props.location.search;
		const query = new URLSearchParams(urlParams);
		const useBackendFeed = query.get("backend_feed") === "true";
		this.state = {
			vcs: [],
			useBackendFeed,
		};
	}

	// Make call to feed endpoint
	componentDidMount() {
		getFeed(this.state.useBackendFeed).then((data) => {
			this.setState({ vcs: data });
		});
	}

	render() {
		return (
			<div className="container-app">
				<div className="pro-pre-profile-preview-grid">
					{this.state.vcs.map((vc, index) => {
						return (
							<ProfilePreview className="container-preview-profile" vc={vc} isInterested={interested[index]} />
						);
					})}
				</div>
			</div>
		);
	}
}

export default Feed;
