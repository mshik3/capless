import React from "react";
import SettingsRow from "./components/SettingsRow";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import Button from "../../common/elements/Button";
import { signOut } from "../onboarding/api/UserAuth";
import "./style/settings.scss";

const SortableItem = sortableElement(({ setting }) => <SettingsRow name={setting} />);
const SortableContainer = sortableContainer(({ children }) => {
	return <div>{children}</div>;
});

class Settings extends React.Component {
	state = {
		settings: [
			"Industry",
			"Location",
			"Revenue",
			"Check Size",
			"Fundraising Round",
			"Company Age",
			"Company Size",
			"Incubators",
		],
	};

	// Update array when state changes
	arrayMove = (array, from, to) => {
		const newArray = array.slice();
		newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
		return newArray;
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ settings }) => ({
			settings: this.arrayMove(settings, oldIndex, newIndex),
		}));
	};

	render() {
		return (
			<div className="container-app">
				<div className="settings">
					<h3>What matters to you?</h3>
					<p>
						Please rank the attributes which matter to you most in a VC. Our algorithm will use this to recommend
						you VCs tailored to your liking.
					</p>
					<SortableContainer onSortEnd={this.onSortEnd}>
						{this.state.settings.map((value, index) => (
							<SortableItem index={index} setting={value} />
						))}
					</SortableContainer>
					<h3>Other Settings</h3>
					<Button>Upgrade your Account</Button>
					<Button>Update Payment Method</Button>
					<Button className="button-last" onClick={() => signOut()}>Sign Out</Button>
				</div>
			</div>
		);
	}
}

export default Settings;
