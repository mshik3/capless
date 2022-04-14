import { Auth } from "aws-amplify";

const signUp = async (email, password, startup_or_investor) => {
	try {
		const user = await Auth.signUp({
			username: email,
			password,
			attributes: {
				'custom:startup_or_investor': startup_or_investor
			}
		});
		console.log("created user: " + JSON.stringify(user));
		return user;
	} catch (error) {
		console.log("error signing up:", error);
		return false;
	}
};

const signIn = async (username, password) => {
	try {
		const user = await Auth.signIn(username, password);
		console.log("retrieved user: " + JSON.stringify(user));
		return true;
	} catch (error) {
		console.log("error signing in", error);
		return false;
	}
};

const signOut = async () => {
	try {
		console.log("signing out");
		await Auth.signOut();
		return true;
	} catch (error) {
		console.log("error signing out", error);
		return false;
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

export { signUp, signIn, signOut, confirmSignUp };
