import React from "react";
import HeaderCard from "./components/HeaderCard";
import RevenueCard from "./components/RevenueCard";
import CapTableCard from "./components/CapTableCard";
import StageCard from "./components/StageCard";
import TeamSizeCard from "./components/TeamSizeCard";
import LocationCard from "./components/LocationCard";
import TeamMembersCard from "./components/TeamMembersCard";
import FastFactCard from "./components/FastFactCard";
import "./style/company-profile.scss";
import "./style/cards.scss";

const CompanyProfile = (props) => {
	let params = {
		name: "Pear Products"
	};
	if (props.location.state) {
		params = props.location.state;
	}
	const aboutUs = "Pear Products is a software technology company focused on providing the solution to the world's lack of accessibility to natural, non-modified, and locally sourced fruits and vegetables. Pear aims to tackle food shortage with logistic analysis and algorithmic supply chain orientation. Learn more about Pear below!";
	const teamMembers = [
		{
			name: "Paul Nelson",
			role: "CEO & Co-Founder"
		},
		{
			name: "Jonathan Nolan",
			role: "CDO & Co-Founder"
		},
		{
			name: "Emanual Garcia",
			role: "CTO & Co-Founder"
		},
	];

	return (
		<div className="container-app">
			<div className="company-profile">
				<HeaderCard name={params.name} aboutUs={aboutUs} />
				<div className="card-row">
					<RevenueCard classes={["profile-card", "small-card"]} />
					<CapTableCard classes={["profile-card", "medium-card", "card-last"]} />
				</div>
				<div className="card-row">
					<StageCard classes={["profile-card", "large-card"]} />
				</div>
				<div className="card-row">
					<LocationCard classes={["profile-card", "medium-card"]} />
					<TeamSizeCard classes={["profile-card", "small-card", "card-last"]} />
				</div>
				<div className="card-row">
					<TeamMembersCard classes={["profile-card", "large-card"]} teamMembers={teamMembers}/>
				</div>
				<div className="card-row">
					<FastFactCard
						classes={["profile-card", "small-card"]}
						header="130 "
						content="Retail Partnerships nationally"
					/>
					<FastFactCard
						classes={["profile-card", "small-card"]}
						header="6"
						content="Cities with active partnerships"
					/>
					<FastFactCard
						classes={["profile-card", "small-card", "card-last"]}
						header="1 Million+"
						content="People served nationally"
					/>
				</div>
			</div>
		</div>
	);
};

export default CompanyProfile;
