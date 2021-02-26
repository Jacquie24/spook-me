import React, { useState } from "react";
import axios from "axios";
import "../AddUser/AddUser.css";

const AddUser = () => {
	const [username, setUsername] = useState("");
	const [title, setTitle] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setimageUrl] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/user", {
				username,
				title,
				address,
				city,
				state,
				description,
				imageUrl,
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
										<input className="input" type="text" placeholder="name" />
									</div>
								</div>

								<div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="email address"
										/>
									</div>
								</div>

								<div className="field">
									<input
										className="input is-danger"
										type="text"
										placeholder="username"
									/>
								</div>
								<div className="field">
									<input
										className="input is-danger"
										type="password"
										minlength="8"
										required
										placeholder="password"
									/>
								</div>
								<div className="field">
									<input
										type="checkbox"
										id="vehicle1"
										name="vehicle1"
										value="Bike"
									/>
									<label for="vehicle1">
										{" "}
										Are you willing to sacrifice your first born son?
									</label>
									<br />
								</div>

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
