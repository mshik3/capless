import React, { Component } from "react";
import "./style/signin.scss";
import { signIn } from "./api/UserAuth";
import Image from "../../common/elements/Image";

export default class SignInView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			remember_me: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		console.log(
			"An email was submitted: " + this.state.email + " " + this.state.password + " " + this.state.remember_me
		);
		event.preventDefault();

		signIn(this.state.email, this.state.password, this.state.remember_me);

		// Call lambda to start signup for user
	}

	render() {
		return (
			<div className="signin-parent">
				<div className="signin-image">
					<Image src={require("./../../assets/images/sign_in/Business-deal.svg")} alt="Sign In Graphic" />
				</div>
				<div className="sign-in-modal-wrapper">
					<div className="auth-middle">
						<div className="signin-auth-inner text-xs">
							<form onSubmit={this.handleSubmit}>
								<h3>Log in to Capless</h3>

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
										<input
											type="checkbox"
											className="custom-control-input"
											id="customCheck1"
											name="remember_me"
											value={!this.state.remember_me}
											onChange={this.handleChange}></input>
										<label className="custom-control-label" htmlFor="customCheck1">
											Remember me
										</label>
									</div>
								</div>

								<button type="submit" className="onboarding-btn btn btn-primary btn-block">
									Submit
								</button>

								<p className="sign-in-reroutes">
									<span className="sign-in-instead">
										Not on Capless? <a href="/#/signup">Create an account</a>
									</span>
									<span className="forgot-password">
										<a href="#">Forgot password?</a>
									</span>
								</p>
								{/* <p className="forgot-password text-right">
									<a href="#">Forgot password?</a>
								</p> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
