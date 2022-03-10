import React, { Component } from "react";
import "./style/signup.scss";
import { signUp, confirmSignUp } from "./api/UserAuth";
import { Link } from "react-router-dom";
import Image from "../../common/elements/Image";
import { createUser } from "./api/CreateUser";

export default class SignUpView extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
            optin: "",
			firstname: "",
			lastname: "",

			username: "",
			password: "",
			email: "",
			shouldShowConfirmCode: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
		this.handleConfirmationCodeSubmit = this.handleConfirmationCodeSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSignUpSubmit(event) {
		console.log("An email was submitted: " + this.state.email + " " + this.state.password);
		event.preventDefault();

		// signUp(this.state.email, this.state.password);

		this.setState({
			username: this.state.email,
			shouldShowConfirmCode: true,
		});

		alert("welcome! " + this.state.email);
	}

	handleConfirmationCodeSubmit(event) {
		console.log("A confirmation code was submitted: " + this.state.confirmationCode);
		event.preventDefault();

		// confirmSignUp(this.state.email, this.state.confirmationCode);

		createUser(this.state.username);
	}

	render() {
		return (
			<div className="signup-parent">
				<div className="signup-image">
					<Image src={require("./../../assets/images/sign_up/Main-Profile.svg")} alt="Sign Up Graphic" />
				</div>
				<div className="signup-modal-wrapper">
					<div className="auth-middle">
						<div className="signup-auth-inner text-xs">
							{!this.state.shouldShowConfirmCode && (
								<div className="signup-form-div">
									<form className="signup-form" onSubmit={this.handleSignUpSubmit}>
										<h3>Sign Up for Capless</h3>

										<div className="form-group">
											<input
												type="email"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
												className="form-control"
												placeholder="Email Address"
											/>
										</div>

										<div className="form-group">
											<input
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
												className="form-control"
												placeholder="Password"
											/>
										</div>
										<Link to="/onboarding">
											<button type="submit" className="onboarding-btn btn btn-primary btn-block">
												Continue
											</button>
										</Link>
										<p className="forgot-password text-right">
											<a href="/#/signin">Already registered? Sign in</a>
										</p>
									</form>
								</div>
							)}
							{this.state.shouldShowConfirmCode && (
								<div className="signup-form-div">
									<form className="signup-form" onSubmit={this.handleConfirmationCodeSubmit}>
										<h4>Check your email to confirm your account!</h4>
										<div className="form-group">
											<input
												type="input"
												name="confirmationCode"
												value={this.state.confirmationCode}
												onChange={this.handleChange}
												className="form-control"
												placeholder="Confirmation Code"
											/>
										</div>

										<button type="submit" className="onboarding-btn btn btn-primary btn-block">
											Submit
										</button>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
