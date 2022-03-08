const USER_ENDPOINT = "https://lvb9zei4qj.execute-api.us-east-1.amazonaws.com/prod/";

const createUser = async (username) => {
	let response = "";
	console.log(JSON.stringify({ username: username }))
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": USER_ENDPOINT },
		body: JSON.stringify({ username: username }),
	};

	let data = await fetch(USER_ENDPOINT, requestOptions);
	response = await data.json();
	return response;
};

export { createUser };
