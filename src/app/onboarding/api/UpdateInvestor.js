const USER_ENDPOINT = "https://llndkc7lji.execute-api.us-east-1.amazonaws.com/prod/";

const UpdateInvestor = async (username, data) => {
	console.log("username: " + username);

	console.log("data: " + data);

    var full_json = Object.assign({ username: username }, data);

	var json_body = JSON.stringify(full_json);

	console.log("update Investor json_body: " + json_body);
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

export { UpdateInvestor };
