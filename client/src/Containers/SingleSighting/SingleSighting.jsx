import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./SingleSighting.css";

//what will the single sighting container require:
//take in the user id and display it to the page, it will use the params to pull the id from the url and use that to show the information.
//what is this container going to be used for exactly

// how will i seed the data, how did jonathan get his data into his single restaurant view?

const SingleSighting = () => {
	const [sighting, setSighting] = useState({});
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`/api/sightings/${id}`)
			.then((response) => {
				console.log(response.data);
				setSighting(response.data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div className="container">
			<section className="hero is-fullheight">
				<div className="columns mt-5">
					<div className="column">
						<div className="columns is-mobile">
							<div className="column">
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											<img src={sighting.imageUrl} alt={sighting.title} />
										</figure>
									</div>
								</div>
								<br></br>
								<div className="card address">
									<div className="card-content">
										<div className="content">
											{sighting.address}, {sighting.city}, {sighting.state}{" "}
											<br></br>
										</div>
									</div>
								</div>
							</div>

							<div className="column">
								<div className="card mb-2">
									<div className="card-content">
										<div className="content">
											<p>{sighting.title}</p>
											<p>{sighting.username}</p>
											<p>{sighting.description}</p>
										</div>
									</div>
								</div>
								{/* this is the second card */}
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											{/* <img
												src="http://www.400capital.com/wp-content/uploads/2014/02/map-placeholder.png"
												alt={sighting.title}
											/> */}
                      <div>
                      
                      </div>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleSighting;
