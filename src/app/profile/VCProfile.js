import React from "react";
import HeaderCard from "./components/HeaderCard";
import FundSizeCard from "./components/FundSizeCard";
import PortfolioCard from "./components/PortfolioCard";
import TeamSizeCard from "./components/TeamSizeCard";
import LocationCard from "./components/LocationCard";
import TeamMembersCard from "./components/TeamMembersCard";
import IndustryCard from "./components/IndustryCard";
import "./style/company-profile.scss";
import "./style/cards.scss";

const VCProfile = (props) => {
	let params = {
		name: "Venture Standard"
	};
	if (props.location.state) {
		params = props.location.state;
	}
	const aboutUs = "Venture Standard is an agriculture technology focused investment firm with a history of providing its portfolio companies with a strong and dependable network, future funding options, and access to a wide talent pool to work with. Learn more about Venture Standard's mission below!";

	const teamMembers = [
		{
			name: "Rebecca Sanford",
			role: "Partner"
		},
		{
			name: "Tony Morrow",
			role: "Partner"
		},
		{
			name: "Rodney Clark",
			role: "Associate"
		}
	];

	return (
		<div className="container-app">
			<div className="company-profile">
				<HeaderCard name={params.name} aboutUs={aboutUs}/>
				<div className="card-row">
					<FundSizeCard classes={["profile-card", "small-card"]} />
					<PortfolioCard classes={["profile-card", "medium-card", "card-last"]} />
				</div>
				<div className="card-row">
					<LocationCard classes={["profile-card", "medium-card"]} />
					<TeamSizeCard classes={["profile-card", "small-card", "card-last"]} />
				</div>
				<div className="card-row">
					<IndustryCard classes={["profile-card", "small-card", "center-text"]} header="Agritech" content="Industry" />
					<TeamMembersCard classes={["profile-card", "medium-card", "card-last"]} teamMembers={teamMembers} companyName={params.name} companyPath="/vc" />
				</div>
			</div>
		</div>
	);
};

export default VCProfile;
