import React, { useState } from "react";
import classNames from "classnames";
import Button from "../../common/elements/Button";
import { signOut } from "../onboarding/api/UserAuth";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { industries, demographic, investment_description, fundraising_stage } from "../onboarding/constants";
import Select from "react-select";
import "./style/settings.scss";

const Settings = () => {
	const [settings, setSettings] = useState([
		"Industry",
		"Investment Description",
		"Investment Demographic",
		"Fundraising Stage",
		"Investment Region",
		"Venture Experience",
		"Investment Range",
		"Investment Check Size",
	]);

	const {
		register,
		getValues,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm({ mode: "onSubmit" });

	const onSubmit = (data) => {
		//TODO: Update backend table with below data when save is pressed
		console.log(data);
		console.log(settings);
	};

	const signOutHandler = () => {
		signOut().then((success) => {
			if (success) {
				document.getElementById("routeToSignIn").click();
			}
		});
	};

	const PriorityRadio = () => {
		return (
			<div className="priority-radio">
				<fieldset>
					<div class="toggle">
						<input type="radio" name="priority" value="low" id="low" />
						<label for="low">Low</label>
						<input type="radio" name="priority" value="medium" id="medium" />
						<label for="medium">Medium</label>
						<input type="radio" name="priority" value="high" id="high" />
						<label for="high">High</label>
					</div>
				</fieldset>
			</div>
		);
	};

	const PreferencesForm = () => {
		return (
			<form className="register-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-5">
						<Controller
							name="industries"
							control={control}
							render={({ field }) => {
								return (
									<div>
										<label>Industry</label>
										<Select
											className="z-index-5"
											name="industries"
											placeholder="Industries"
											options={industries}
											isMulti={true}
											{...field}
										/>
									</div>
								);
							}}
						/>
					</div>
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-4">
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
											className="z-index-4"
											isMulti
											{...field}
										/>
									</div>
								);
							}}
						/>
					</div>
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-3">
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
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-2">
						<Controller
							name="fundraising_stage"
							control={control}
							type="text"
							defaultValue={[]}
							render={({ field }) => {
								return (
									<div>
										<label>Fundraising Stage</label>
										<Select
											name="fundraising_stage"
											placeholder="Fundraising Stage"
											options={fundraising_stage}
											className="z-index-2"
											isMulti
											{...field}
										/>
									</div>
								);
							}}
						/>
					</div>
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-1">
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
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-1">
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
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-1">
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
				</div>
				<div className="priority-group">
					<PriorityRadio />
					<div className="priority-choice form-group z-index-1">
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
				</div>

				<div className="form-submit">
					<input className="form-control submit" type="submit" id="submit" value="Save" />
				</div>
			</form>
		);
	};

	return (
		<div className={classNames(`container-app settings`)}>
			<div className="centered-header">
				<h3>What matters to you?</h3>
				<h5>
					Please enter in and rank the attributes which matter to you when looking for a match.<br></br> Our
					algorithm will use this to recommend you options tailored to your liking.
				</h5>
			</div>
			<PreferencesForm />
			<h3>Other Settings</h3>
			<Button>Upgrade your Account</Button>
			<Button>Update Payment Method</Button>
			<Button className="button-last" onClick={() => signOutHandler()}>
				Sign Out
			</Button>
			<Link to={{ pathname: "/signin" }} id="routeToSignIn"></Link>
		</div>
	);
};

export default Settings;
