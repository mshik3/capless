import { Auth } from "aws-amplify";

const FEED_ENDPOINT = "https://iofe7t7f7k.execute-api.us-east-1.amazonaws.com/prod/feed";
const OFFLINE_FEED_DATA = [
	{
		name: "Venture Standard",
		series: "Series A",
		industry: "Agritech",
		capTable: "85M",
		interested: true,
		total_score: 20,
	},
	{
		name: "Shield AI",
		series: "Series J",
		industry: "CyberSecurity",
		capTable: "10M",
		interested: false,
		total_score: 19,
	},
	{
		name: "Sequoia Capital",
		series: "Series B",
		industry: "Biotech",
		capTable: "25M",
		interested: false,
		total_score: 18,
	},
	{
		name: "Accel",
		series: "Series C",
		industry: "Automative",
		capTable: "15M",
		interested: false,
		total_score: 17,
	},
	{
		name: "Kleiner Perkins",
		series: "Series D",
		industry: "Consulting",
		capTable: "35M",
		interested: true,
		total_score: 16,
	},
	{
		name: "Hiya",
		series: "Series E",
		industry: "Social Media",
		capTable: "45M",
		interested: false,
		total_score: 15,
	},
	{
		name: "Auth0",
		series: "Series F",
		industry: "CyberSecurity",
		capTable: "35M",
		interested: false,
		total_score: 14,
	},
	{
		name: "HOVER",
		series: "Series G",
		industry: "Drone Tech",
		capTable: "65M",
		interested: false,
		total_score: 13,
	},
	{
		name: "Wrench",
		series: "Series H",
		industry: "Manufacturing",
		capTable: "105M",
		interested: false,
		total_score: 12,
	},
	{
		name: "Unite Us",
		series: "Series I",
		industry: "Human Resources",
		capTable: "5M",
		interested: false,
		total_score: 11,
	},
];

const getFeed = async (useBackendFeed) => {
	let response = OFFLINE_FEED_DATA;
	if (useBackendFeed) {
		let data = await fetch(FEED_ENDPOINT);
		response = await data.json();
	}
	return response;
};

const signUp = async (username, password, email) => {
	try {
		const { user } = await Auth.signUp({
			username,
			password,
			attributes: {
				email, // optional
			},
		});
		console.log(user);
	} catch (error) {
		console.log("error signing up:", error);
	}
};

const signIn = async (username, password) => {
	try {
		const user = await Auth.signIn(username, password);
		console.log("retrieved user: " + user);
	} catch (error) {
		console.log("error signing in", error);
	}
};

const confirmSignUp = async (email, code) => {
	try {
		await Auth.confirmSignUp(email, code);
		console.log("successfully confirmed the user");
	} catch (error) {
		console.log("error confirming sign up", error);
	}
};

export { getFeed, signUp, signIn, confirmSignUp };
