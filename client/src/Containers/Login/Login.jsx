import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Login = () => {

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
			.then(response => {
                console.log(response.data);

			})
			.catch(err => {
				console.log(err);
			});
	};
    return (
        <div>
<div className="field">
  <p className="control has-icons-right">
    <input className="input" type="username" placeholder="Username"
    							value={username}
                                onChange={(e) => setUsername(e.target.value)}>
</input>
        <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password"
    							value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
    <button className="button is-success" onClick={handleFormSubmit}>
      Login
    </button>
  </p>
</div>
</div>
    );
};

export default Login;