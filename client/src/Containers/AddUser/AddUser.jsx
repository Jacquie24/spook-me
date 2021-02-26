import React, { useState } from "react";
import axios from "axios";
import "../AddUser/AddUser.css";

const AddUser = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/user", {
				firstname,
				lastname,
				username,
				password,
				email,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<section class="section is-small">
			<h1 class="title">Sign Up</h1>
			<div class="container is-fluid">
				<div class="notification is-primary contain">
					<div className="container mt-5">
						<div className="columns">
							<div className="column is-6 is-offset-3">
								<div className="field">
									<div className="control">
										<input
											id="firstname"
											className="input"
											type="text"
											placeholder="first name"
										/>
									</div>
								</div>

								<div className="field">
									<div className="control">
										<input
											id="lastname"
											className="input"
											type="text"
											placeholder="last name"
										/>
									</div>
								</div>

								<div className="field">
									<div className="control">
										<input
											id="email"
											className="input"
											type="text"
											placeholder="email"
										/>
									</div>
								</div>

								<div className="field">
									<input
										id="username"
										className="input is-danger"
										type="text"
										placeholder="username"
									/>
								</div>
								<div className="field">
									<input
										id="password"
										className="input is-danger"
										type="password"
										minlength="8"
										required
										placeholder="password"
									/>
								</div>
								{/* <div className="field">
									<input
										type="checkbox"
										id="check"
										name="check"
										value="Bike"
									/>
									<label for="check">
										{" "}
										Are you willing to sacrifice your first born son?
									</label>
									<br />
								</div> */}

								<div className="field is-grouped">
									<div className="control">
										<button className="button is-link">Submit</button>
									</div>
									<div className="control">
										<button className="button is-link is-light">Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			;<section class="section is-large"></section>
		</section>
	);
};

export default AddUser;
