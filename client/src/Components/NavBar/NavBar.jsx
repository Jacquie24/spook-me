import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						width="112"
						height="28"
					/>
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item">
						<Link to="/">Home</Link>
					</a>

					<a className="navbar-item">
						<Link to="/sightings/new">Add New</Link>
					</a>

					<a className="navbar-item">
						<Link to="/sightings">View All</Link>
					</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-primary">Log In</a>
							<a className="button is-light">
								<Link to="/users/new">Sign Up</Link>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

