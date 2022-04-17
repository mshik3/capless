import React, { Component } from "react";
import "./style/signup.scss";
import { signUp, confirmSignUp } from "./api/UserAuth";
import Image from "../../common/elements/Image";
import { UpdateUser } from "./api/UpdateUser";
import InvestorOnboardingView from "./InvestorOnboardingView";
import StartupOnboardingView from "./StartupOnboardingView";

export default class SignUpView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startup_or_investor: "startup",
			password: "",
			user_email: "",
			user_id: "",
			main: true,
			codeConfirm: false,
			investor_onboarding: false,
			startup_onboarding: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
		this.handleConfirmationCodeSubmit = this.handleConfirmationCodeSubmit.bind(this);
		this.onRadioChange = this.onRadioChange.bind(this);
	}

	onRadioChange = (e) => {
		this.setState({
			startup_or_investor: e.target.value,
		});
	};

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSignUpSubmit(event) {
		console.log("An email was submitted: " + this.state.user_email + " " + this.state.password + " " + this.state.startup_or_investor);
		event.preventDefault();
		signUp(this.state.user_email, this.state.password, this.state.startup_or_investor).then((user) => {
			if (user) {
				this.setState({
					user_id: user.userSub,
					showMainView: false,
					showCodeConfirmView: true,
				});
				alert("welcome! " + this.state.email + ", user_id: " + user.userSub);
			}
		});
	}

	handleConfirmationCodeSubmit(event) {
		console.log("A confirmation code was submitted: " + this.state.confirmationCode);
		event.preventDefault();

		confirmSignUp(this.state.user_email, this.state.confirmationCode);

		if (this.state.startup_or_investor == "investor") {
			this.setState({
				showCodeConfirmView: false,
				investor_onboarding: true,
			});
		} else if (this.state.startup_or_investor == "startup") {
			this.setState({
				showCodeConfirmView: false,
				startup_onboarding: true,
			});
		}
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
							{this.state.showMainView && (
								<div className="signup-form-div">
									<form className="signup-form" onSubmit={this.handleSignUpSubmit}>
										<h3>Sign Up for Capless</h3>

										<div className="form-group">
											<input
												type="user_email"
												name="user_email"
												value={this.state.user_email}
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
										<br />
										<div className="signup-form-radio">
											Are you part of a startup or an accredited investor?
											<br />
											<div className="form-row radio-row">
												<div className="form-radio-item">
													<label className="radio-label">
														<input
															type="radio"
															value="startup"
															onChange={this.onRadioChange}
															checked={this.state.startup_or_investor === "startup"}
														/>
														Startup
													</label>
												</div>
												<br />
												<div className="form-radio-item">
													<label className="radio-label">
														<input
															type="radio"
															value="investor"
															onChange={this.onRadioChange}
															checked={this.state.startup_or_investor === "investor"}
														/>
														Investor
													</label>
												</div>
											</div>
										</div>
										<button type="submit" className="onboarding-btn btn btn-primary btn-block">
											Continue
										</button>
										<p className="forgot-password text-right">
											<a href="/#/signin">Already registered? Sign in</a>
										</p>
									</form>
								</div>
							)}
							{this.state.showCodeConfirmView && (
								<div className="signup-form-div">
									<form
										className="signup-form"
										onSubmit={this.handleConfirmationCodeSubmit}
										action="/#/onboarding">
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
							{this.state.investor_onboarding && (
								<div className="signup-form-div">
									<InvestorOnboardingView user_email={this.state.user_email} user_id={this.state.user_id} />
								</div>
							)}
							{this.state.startup_onboarding && (
								<div className="signup-form-div">
									<StartupOnboardingView user_email={this.state.user_email} user_id={this.state.user_id} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
