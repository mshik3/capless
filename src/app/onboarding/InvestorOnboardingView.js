import React, { Component, useState } from "react";
import "./style/investor-onboarding.scss";
import Select from "react-select";
import { industries, demographic, investment_description } from "./constants";
import { UpdateUser } from "./api/UpdateUser";
import { UpdateInvestor } from "./api/UpdateInvestor";

import { useForm, Controller } from "react-hook-form";

const InvestorForm = (data) => {
	const [submitted, setSubmitted] = useState();
	const username = data.username;
	const company_email = data.company_email;

	const {
		register,
		getValues,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm({ mode: "onChange" });

	const onSubmit = (data) => {
		console.log("submitted full form");

		setSubmitted(data);

		UpdateUser(username, "investor", company_email);

		UpdateInvestor(username, data);

		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* <label>Are you a developer?</label>
			<input type="radio" value="Yes" {...register("developer", { required: true })} />
			<input type="radio" value="No" {...register("developer", { required: true })} /> */}
			<label>Username</label>
			<p>{username}</p>

			<label>First name</label>
			<input type="text" {...register("firstname", { required: true, maxLength: 80 })} />

			<label>Last name</label>
			<input type="text" {...register("lastname", { required: true, maxLength: 100 })} />

			<label>Company Email</label>
			<input
				type="text"
				{...register("company_email", {
					required: true,
					pattern:
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
			/>

			<label>Location</label>
			<select name="location" {...register("location", { required: true })}>
				<option value="chicago">Chicago</option>
				<option value="san_francisco">San Francisco</option>
				<option value="new_york">New York</option>
				<option value="los_angeles">Los Angeles</option>
				<option value="austin">Austin</option>
				<option value="atlanta">Atlanta</option>
				<option value="washington_dc">Washington DC</option>
			</select>

			<label>Zip Code</label>
			<input type="text" {...register("zip_code", { required: true, pattern: /^\d{5}(?:[-\s]\d{4})?$/ })} />

			<label>Company Name</label>
			<input type="text" {...register("company_name", { required: true, maxLength: 100 })} />

			<label>LinkedIN Link</label>
			<input type="text" {...register("linkedIn_link", { required: true, maxLength: 100 })} />

			<label>Venture Experience</label>
			<select name="venture_experience" {...register("venture_experience", { required: true })}>
				<option value="less_than_one_year">&lt; 1 year</option>
				<option value="one_to_three_years">1-3 years</option>
				<option value="three_to_five_years">3-5 years</option>
				<option value="five_to_ten_years">5-10 years</option>
				<option value="ten_plus_years">10+ years</option>
			</select>

			<div>
				<Controller
					name="industries"
					control={control}
					render={({ field }) => {
						return (
							<div>
								<label>Industries</label>
								<Select name="industries" placeholder="Industries" options={industries} isMulti {...field} />
							</div>
						);
					}}
				/>
			</div>

			<label>Investment Range</label>
			<select name="investment_range" {...register("investment_region", { required: true })}>
				<option value="less_than_one_thousand">&lt; $1k</option>
				<option value="one_thousand_to_ten_thousand">$1k-10k</option>
				<option value="ten_thousand_to_fifty_thousand">$10k-$50</option>
				<option value="fifty_thousand_to_hundred_thousand">$50k-$100k</option>
				<option value="hundred_thousand_to_one_million">$100k-$1M</option>
				<option value="one_million_to_ten_million">$1M-$10M</option>
				<option value="ten_million_to_hundred_million">$10M-$100M</option>
			</select>

			<label>Investment Region</label>
			<select name="investment_region" {...register("investment_region", { required: true })}>
				<option value="chicago">Chicago</option>
				<option value="san_francisco">San Francisco</option>
				<option value="new_york">New York</option>
				<option value="los_angeles">Los Angeles</option>
				<option value="austin">Austin</option>
				<option value="atlanta">Atlanta</option>
				<option value="washington_dc">Washington DC</option>
			</select>

			<div>
				<Controller
					name="investment_demographic"
					control={control}
					render={({ field }) => {
						return (
							<div>
								<label>Investment Demographic</label>
								<Select
									name="investment_demographic"
									placeholder="Investment Demographic"
									options={demographic}
									isMulti
									{...field}
								/>
							</div>
						);
					}}
				/>
			</div>

			<div>
				<Controller
					name="investment_description"
					control={control}
					render={({ field }) => {
						return (
							<div>
								<label>Investment Description</label>
								<Select
									name="investment_description"
									placeholder="Investment Description"
									options={investment_description}
									isMulti
									{...field}
								/>
							</div>
						);
					}}
				/>
			</div>

			<label>Investment Check Size</label>
			<select name="investment_check_size" {...register("investment_check_size", { required: true })}>
				<option value="one_thousand">$1,000</option>
				<option value="ten_thousand">$10,000</option>
				<option value="hundred_thousand">$100,000</option>
				<option value="one_million">$1,000,000</option>
				<option value="ten_million">$10,000,000</option>
			</select>

			<label>Referral Name</label>
			<input type="text" {...register("referral", { required: true, maxLength: 100 })} />

			{submitted && (
				<div>
					Submitted Data:
					<br />
					{JSON.stringify(submitted)}
				</div>
			)}

			<input type="submit" />
		</form>
	);
};

export default class InvestorOnboardingView extends Component {
	constructor(props) {
		super(props);

		console.log("username: " + this.props.username);
	}

	render() {
		return (
			<div className="signup-parent">
				<div className="signup-modal-wrapper">
					<div className="auth-middle">
						<div className="signup-auth-inner text-xs">
							<div className="signup-form-div">
								<InvestorForm username={this.props.username} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
