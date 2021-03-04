import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Map from "../../Components/GoogleMap/GoogleMap";

const Home = () => {
  return (
		<div>
			<section className="section is-medium">
				<h1 className="subtitle">
					<br></br>* USER BEWARE...YOU'RE IN FOR A SCARE! *<br></br>
				</h1>
			</section>

			<div className="columns">
				<section className="section is-small">
					<div className="column">
						<div className="container is-fluid">
							<div className="card">
								<div className="card-content">
									<div className="content">
										Ready to get spooked? Here you will find the most haunted
										locations in America that you can visit yourself or find
										other user stories to spook your guests out by the campfire.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<br></br>
			</div>
			<section className="section is-small">
				<div className="startBtns">
					<Link className="button is-link is-outlined" to="/login">
						Login
					</Link>
					<Link className="button is-link is-outlined" to="/sightings">
						All Spooky Sightings
					</Link>

					<Link className="button is-link is-outlined" to="/users/new">
						New User
					</Link>
				</div>
			</section>
			<section className="section is-medium">
				<h1 className="mapTitle">
					Need some spook-spiration? Click on a ghost to find a haunted
					location.
				</h1>
			</section>
			<Map />
		</div>
	);
};

export default Home;
