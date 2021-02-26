import React from "react";
import "../AddUser/AddUser.css";

const AddUser = () => {
	return (
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
	);
};

export default AddUser;
