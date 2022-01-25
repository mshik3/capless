import React, { Component } from "react";

export default class SignUpView extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-middle">
                <div className="signup-auth-inner auth-inner text-xs">
                    <form>
                        <h3>Source the next unicorn deal</h3>

                        <h4>Capless is the next step in passive deal sourcing, perfectly catered to your needs.</h4>

                        <h4>Please fill out some information so we can get started.</h4>

                        <div className="signup-flex-box">
                            <div className="form-group signup-flex-child">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group signup-flex-child">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <button type="submit" className="signup-btn btn btn-primary btn-block">Continue</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}