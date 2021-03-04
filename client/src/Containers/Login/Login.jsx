import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = (props) => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("this is firing");
    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((response) => {
        sessionStorage.setItem("userId", response.data._id);
        sessionStorage.setItem("userName", username);
        console.log(response.data);
        if (response.data._id) {
          props.setId(response.data._id);
          history.push(`/users/${response.data._id}`);
        } else {
          //TODO: Modals, toasts, NOT javascript alerts.
          // But tell the user login didn't work.
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
		<div className="formContainer">
			<section className="section is-small">
				<h1 className="page-title">All The Spooks...</h1>
			</section>
			<section className="section is-small">
				<div className="loginForm">
					<div className="field">
						<p className="control has-icons-right">
							<input
								className="input"
								type="username"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							></input>
							<span className="icon is-small is-right">
								<i className="fas fa-check"></i>
							</span>
						</p>
					</div>
					<div className="field">
						<p className="control has-icons-left">
							<input
								className="input"
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></input>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<button className="button is-link is-outlined" onClick={handleFormSubmit}>
								Login
							</button>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
