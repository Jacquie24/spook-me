import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import "../Home/Home.css"

const Home = () => {
	return (
		<div>
			<Navbar />

			<section class="section is-medium">
				<h1 class="title">Spook Me</h1>
				<h2 class="subtitle">
					Don't forget your Holy Water...
				</h2>
			</section>

			<div class="columns">
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary contain">
							images carousel
						</div>
					</div>
				</div>
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary contain">
							go to my user dashboard (or login page if user is not logged in)
						</div>
					</div>
					<br />
					<div class="container is-fluid">
						<div class="notification is-primary contain">
							most recently posted spooky spot
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

