import React, { Component } from "react";
import "./style/signup.scss";
import { signUp } from "../../utils/AppGateway";
import InformationalTiles from "./InformationalTiles";

export default class SignUpView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			username: "",
			password: "",
			email: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		console.log(
			"A name was submitted: " + this.state.username + " " + this.state.password + " " + this.state.email
		);
		event.preventDefault();

		signUp(this.state.username, this.state.password, this.email);

		// Call lambda to start signup for user
	}

	render() {
		return (
			<div>
				<InformationalTiles />
				<div className="auth-right-wrapper">
					<div className="auth-middle">
						<div className="auth-inner text-xs">
							<form onSubmit={this.handleSubmit}>
								<h4>Please fill out some information so we can get started.</h4>

								<div className="signup-flex-box">
									<div className="form-group signup-flex-child">
										<input
											type="text"
											name="username"
											value={this.state.username}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Username"
										/>
									</div>

									<div className="form-group signup-flex-child">
										<input
											type="password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Password"
										/>
									</div>
								</div>

								<div className="form-group">
									<input
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
										className="form-control"
										placeholder="Email"
									/>
								</div>

								<button type="submit" className="signup-btn btn btn-primary btn-block">
									Continue
								</button>
								<p className="forgot-password text-right">
									<a href="#">Already registered? Sign in</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
