import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Map from "../../Components/GoogleMap/GoogleMap";

const Home = () => {
	return (
		<div>
			<section className="section is-medium">
				<h1 className="subtitle">Don't forget your Holy Water...</h1>
			</section>

			<div className="columns">
				<section className="section is-small">
					<div className="column">
						<div className="container is-fluid">
							<div className="card">
								<div className="card-content">
									<div className="content">
										* USER BEWARE...YOU'RE IN FOR A SCARE! *<br></br>
										<br></br>
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
					<button>Get Spook'd</button>
					<button>Spook Others</button>
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
