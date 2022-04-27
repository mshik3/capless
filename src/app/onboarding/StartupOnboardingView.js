import React, { Component, useState } from "react";
import "./style/startup-onboarding.scss";
import Select from "react-select";
import { industries, demographic, investment_description } from "./constants";
import { UpdateUser } from "./api/UpdateUser";
import { UpdateCompany } from "./api/UpdateCompany";
import { v4 as uuidv4 } from "uuid";

import { useForm, Controller } from "react-hook-form";

const StartupForm = (data) => {
	const [submitted, setSubmitted] = useState();
	const user_email = data.user_email;
	const user_id = data.user_id;

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
		const company_id = uuidv4();
		UpdateUser(user_id, user_email, data.firstname, data.lastname, "startup", company_id);
		UpdateCompany(user_id, company_id, "startup", data);
		console.log(data);
	};

	return (
		<form className="register-form" onSubmit={handleSubmit(onSubmit)}>
			<label>User Email</label>
			<p>{user_email}</p>

			<div className="form-row">
				<div className="form-group">
					<label>First name</label>
					<input
						className="form-control"
						type="text"
						{...register("firstname", { required: true, maxLength: 80 })}
					/>
				</div>
				<div className="form-group">
					<label>Last name</label>
					<input
						className="form-control"
						type="text"
						{...register("lastname", { required: true, maxLength: 100 })}
					/>
				</div>
			</div>

			<div className="form-group">
				<label>Company Email</label>
				<input
					className="form-control"
					type="text"
					{...register("company_email", {
						required: true,
						pattern:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
				/>
			</div>
			<div className="form-group">
				<label>Location</label>
				<select className="form-control" name="location" {...register("location", { required: true })}>
					<option value="chicago">Chicago</option>
					<option value="san_francisco">San Francisco</option>
					<option value="new_york">New York</option>
					<option value="los_angeles">Los Angeles</option>
					<option value="austin">Austin</option>
					<option value="atlanta">Atlanta</option>
					<option value="washington_dc">Washington DC</option>
				</select>
			</div>
			<div className="form-group">
				<label>Zip Code</label>
				<input
					className="form-control"
					type="text"
					{...register("zip_code", { required: true, pattern: /^\d{5}(?:[-\s]\d{4})?$/ })}
				/>
			</div>
			<div className="form-group">
				<label>Company Name</label>
				<input
					className="form-control"
					type="text"
					{...register("company_name", { required: true, maxLength: 100 })}
				/>
			</div>
			<div className="form-group">
				<label>LinkedIN Link</label>
				<input
					className="form-control"
					type="text"
					{...register("linkedIn_link", { required: true, maxLength: 100 })}
				/>
			</div>
			<div className="form-group">
				<label>Venture Experience</label>
				<select
					className="form-control"
					name="venture_experience"
					{...register("venture_experience", { required: true })}>
					<option value="less_than_one_year">&lt; 1 year</option>
					<option value="one_to_three_years">1-3 years</option>
					<option value="three_to_five_years">3-5 years</option>
					<option value="five_to_ten_years">5-10 years</option>
					<option value="ten_plus_years">10+ years</option>
				</select>
			</div>
			<div className="form-group">
				<label>Investment Range</label>
				<select
					className="form-control"
					name="investment_range"
					{...register("investment_range", { required: true })}>
					<option value="less_than_one_thousand">&lt; $1k</option>
					<option value="one_thousand_to_ten_thousand">$1k-10k</option>
					<option value="ten_thousand_to_fifty_thousand">$10k-$50</option>
					<option value="fifty_thousand_to_hundred_thousand">$50k-$100k</option>
					<option value="hundred_thousand_to_one_million">$100k-$1M</option>
					<option value="one_million_to_ten_million">$1M-$10M</option>
					<option value="ten_million_to_hundred_million">$10M-$100M</option>
				</select>
			</div>

			<div className="form-group">
				<label>Investment Region</label>
				<select
					className="form-control"
					name="investment_region"
					{...register("investment_region", { required: true })}>
					<option value="chicago">Chicago</option>
					<option value="san_francisco">San Francisco</option>
					<option value="new_york">New York</option>
					<option value="los_angeles">Los Angeles</option>
					<option value="austin">Austin</option>
					<option value="atlanta">Atlanta</option>
					<option value="washington_dc">Washington DC</option>
				</select>
			</div>

			<div className="form-group">
				<label>Investment Check Size</label>
				<select
					className="form-control"
					name="investment_check_size"
					{...register("investment_check_size", { required: true })}>
					<option value="one_thousand">$1,000</option>
					<option value="ten_thousand">$10,000</option>
					<option value="hundred_thousand">$100,000</option>
					<option value="one_million">$1,000,000</option>
					<option value="ten_million">$10,000,000</option>
				</select>
			</div>

			<div className="form-group z-index-3">
				<Controller
					name="investment_demographic"
					control={control}
					type="text"
					defaultValue={[]}
					render={({ field }) => {
						return (
							<div>
								<label>Investment Demographic</label>
								<Select
									name="investment_demographic"
									placeholder="Investment Demographic"
									options={demographic}
									className="z-index-3"
									isMulti
									{...field}
								/>
							</div>
						);
					}}
				/>
			</div>

			<div className="form-group z-index-2">
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
									className="z-index-2"
									isMulti
									{...field}
								/>
							</div>
						);
					}}
				/>
			</div>
			<div className="form-group z-index-1">
				<Controller
					name="industries"
					control={control}
					render={({ field }) => {
						return (
							<div>
								<label>Industries</label>
								<Select
									className="z-index-1"
									name="industries"
									placeholder="Industries"
									options={industries}
									isMulti
									{...field}
								/>
							</div>
						);
					}}
				/>
			</div>
			<div className="form-submit">
				<input className="form-control submit" type="submit" id="submit" />
			</div>
		</form>
	);
};

export default class StartupOnboardingView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="signup-parent">
				<div className="signup-modal-wrapper">
					<div className="auth-middle">
						<div className="signup-auth-inner text-xs">
							<div className="signup-form-div">
								<StartupForm user_email={this.props.user_email} user_id={this.props.user_id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
