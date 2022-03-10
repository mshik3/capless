const USER_ENDPOINT = "https://lvb9zei4qj.execute-api.us-east-1.amazonaws.com/prod/";

const createUser = async (username, startup_or_investor) => {
	var json_body = JSON.stringify({ username: username, startup_or_investor: startup_or_investor });
	console.log(json_body);
	const requestOptions = {
		mode: "cors",
		method: "PUT",
		headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
		body: json_body,
	};
	fetch(USER_ENDPOINT, requestOptions)
		.then(async (response) => {
			const isJson = response.headers.get("content-type")?.includes("application/json");
			console.log(isJson);
			const data = isJson && (await response.json());

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			}

			console.log("data: " + data);
			return response;
		})
		.catch((error) => {
			console.error("There was an error!", error);
		});
};

export { createUser };
