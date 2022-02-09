import React, { Component } from "react";
import "./style/signin.scss";
import { signIn } from "./api/UserAuth";
import InformationalTiles from "./components/InformationalTiles";

export default class SignInView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
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
		console.log("An email was submitted: " + this.state.email + " " + this.state.password);
		event.preventDefault();

		signIn(this.state.email, this.state.password);

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
								<h3>Sign In</h3>

								<div className="form-group">
									<label>Email address</label>
									<input
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
										className="form-control"
										placeholder="Enter email"
									/>
								</div>

								<div className="form-group">
									<label>Password</label>
									<input
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
										className="form-control"
										placeholder="Enter password"
									/>
								</div>

								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" htmlFor="customCheck1">
											Remember me
										</label>
									</div>
								</div>

								<button type="submit" className="onboarding-btn btn btn-primary btn-block">
									Submit
								</button>
								<p className="forgot-password text-right">
									<a href="#">Forgot password?</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
