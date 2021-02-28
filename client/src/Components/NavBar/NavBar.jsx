import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/sightings/new">Add New</Link>
			<Link to="/sightings">View All</Link>
			<Link to="/users/new">Login/Sign Up</Link>
		</div>
	);
};

export default NavBar;
