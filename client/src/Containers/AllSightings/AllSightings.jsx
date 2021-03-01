import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllSightings.css";

const AllSightings = () => {
	const [sightings, setSightings] = useState([]);

	useEffect(() => {
		axios
			.get("/api/sightings")
			.then((response) => {
				setSightings(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<div className="container">
				<div className="columns mt-5 is-multiline">
					{sightings.map((sighting) => (
						<div className="column is-one-fifth sight" key={sighting._id}>
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={sighting.imageUrl} alt={sighting.title} />
									</figure>
								</div>
								<div className="card-content">
									<div className="media">
										<div className="media-content is-centered mb-1">
											<p className="title is-4">{sighting.title}</p>
											<p className="subtitle is-6">{sighting.username}</p>
										</div>
									</div>

									<div className="content">
										{sighting.address} <br></br>
										{sighting.city}, {sighting.state}
										<br></br>
										<Link to={`/sightings/${sighting._id}`}>Tell Me More</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<section class="section is-medium"></section>
		</div>
	);
};

export default AllSightings;
