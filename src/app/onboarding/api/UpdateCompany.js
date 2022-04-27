const INVESTOR_ENDPOINT = "https://llndkc7lji.execute-api.us-east-1.amazonaws.com/prod/";
const STARTUP_ENDPOINT = "https://kas3xti9a8.execute-api.us-east-1.amazonaws.com/prod/";

const UpdateCompany = async (user_id, company_id, startup_or_investor, data) => {
	console.log("user_id: " + user_id);
	console.log("data: " + data);
	var full_json = Object.assign({ user_id: user_id, company_id: company_id }, data);

	// Convert entries with [{label1: ..., value1... }, {label2: ..., value2... }, ...] to [value1, value2]
	for (var key in full_json) {
		var attribute = full_json[key];
		if (attribute instanceof Array) {
			full_json[key] = attribute.map((element) => {
				return element.hasOwnProperty("value") ? element.value : element;
			});
		}
	}

	var json_body = JSON.stringify(full_json);
	console.log("update json_body: " + json_body);
	const requestOptions = {
		mode: "cors",
		method: "PUT",
		headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
		body: json_body,
	};
	const endpoint = startup_or_investor === "startup" ? STARTUP_ENDPOINT : INVESTOR_ENDPOINT;
	fetch(endpoint, requestOptions)
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

export { UpdateCompany };
