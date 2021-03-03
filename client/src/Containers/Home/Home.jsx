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
										locations in America that you can visit yourself or use
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
					<Link className="button is-link is-outlined" to="/sightings">Get Spook'd</Link>
					<Link className="button is-link is-outlined" to="/sightings/new">Spook Others</Link>
				</div>
			</section>
			<section className="section is-medium">
				<h1 className="mapTitle">Visit a haunting not posted by our users!</h1>
				<Map />
			</section>
		</div>
	);
};

export default Home;
