import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import "../Home/Home.css";

const Home = () => {
	return (
		<div>
			<section class="section is-medium">
				<h1 class="title">Spook Me</h1>
				<h2 class="subtitle">Don't forget your Holy Water...</h2>
			</section>

			<div class="columns">
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary contain">images carousel</div>
					</div>
					<br />
					<div class="container is-fluid">
						<div class="notification is-primary contain">
							<Link to="/users/:id">My Spooky Dashboard!</Link>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary contain">
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img
											src="https://www.visitsavannah.com/sites/default/files/styles/large_square/public/original-marshall-house.jpg?itok=wT9khAzR"
											alt="Marshall House"
										/>
									</figure>
								</div>
								<div className="card-content">
									<div className="media">
										<div className="media-content is-centered mb-1">
											<p className="title is-4">Marshall House</p>
											<p className="subtitle is-6">@johnsmith</p>
										</div>
									</div>

									<div className="content">
										123 E Broughton St <br></br>
										Savannah, GA
										<br></br>
										<Link to={`/sightings/6036a2adf3f15e00287620fa`}>
											Tell Me More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
