import { Auth } from "aws-amplify";

const signUp = async (username, password) => {
	try {
		const { user } = await Auth.signUp({
			username,
			password,
		});
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

export { signUp, signIn, confirmSignUp };
