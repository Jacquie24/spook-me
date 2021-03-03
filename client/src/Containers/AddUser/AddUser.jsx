import React, { useState } from "react";
import axios from "axios";
import "./AddUser.css";
import { useHistory } from "react-router-dom";


const AddUser = () => {

	const history = useHistory();

	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("this is firing");
		axios
			.post("/api/users", {
				firstName,
				lastName,
				username,
				password,
				email,
			})
			.then(response => {
				sessionStorage.setItem("userId", response.data._id)
				console.log(response.data);
				history.push("/login");
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<section className="section is-small">
			<h1 className="title">Sign Up</h1>
			<div className="container is-fluid">
				<div className="notification is-primary contain">
					<div className="container mt-5">
						<div className="columns">
							<div className="column is-6 is-offset-3">
								<div className="field">
									<div className="control">
										<input
											id="firstname"
											className="input"
											type="text"
											value={firstName}
											onChange={(e) => setFirstname(e.target.value)}
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
											value={lastName}
											onChange={(e) => setLastname(e.target.value)}
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
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="email"
										/>
									</div>
								</div>

								<div className="field">
									<input
										id="username"
										className="input is-danger"
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										placeholder="username"
									/>
								</div>
								<div className="field">
									<input
										id="password"
										className="input is-danger"
										type="password"
										minLength="8"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="password"
									/>
								</div>
								{/* <div className="field">
									<input type="checkbox" id="check" name="check" value="Bike" />
									<label for="check">
										{" "}
										Are you willing to sacrifice your first born son?
									</label>
									<br />
								</div> */}

								<div className="field is-grouped">
									<div className="control">
										<button
											className="button"
											onClick={handleFormSubmit}
										>
											Submit
										</button>
									</div>
									<div className="control">
										<button className="button link">Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="section is-large"></section>
		</section>
	);
};

export default AddUser;
