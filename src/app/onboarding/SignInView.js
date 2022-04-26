import React, { useEffect, Component } from "react";
import "./style/signin.scss";
import { signIn } from "./api/UserAuth";
import Image from "../../common/elements/Image";
import { Link } from "react-router-dom";

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
		event.preventDefault();
		signIn(this.state.email, this.state.password, this.state.remember_me, this.routeToFeed).then((success) => {
			if (success) {
				document.getElementById("routeToFeed").click();
			}
		});
	}

	render() {
		return (
			<div className="signin-parent">
				<div className="signin-image">
					<Image src={require("./../../assets/images/sign_in/Business-deal.svg")} alt="Sign In Graphic" />
				</div>
				<div className="signin-modal-wrapper">
					<div className="auth-middle">
						<div className="signin-auth-inner text-xs">
							<div className="signin-form-div">
								<form className="signin-form" onSubmit={this.handleSubmit}>
									<h3>Log in to Capless</h3>

									<div className="form-group">
										<input
											type="email"
											name="email"
											value={this.state.email}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Email Address"
											required
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
											required
										/>
									</div>

									<div className="remember-me-div">
										<input
											type="checkbox"
											id="remember-me"
											value={!this.state.remember_me}
											onChange={this.handleChange}
										/>
										<label htmlFor="remember-me" className="remember-me-label">
											Remember me
										</label>
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
								</form>
							</div>
						</div>
					</div>
				</div>
				<Link to={{ pathname: "/feed" }} id="routeToFeed"></Link>
			</div>
		);
	}
}
