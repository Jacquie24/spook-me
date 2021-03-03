import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SightingsForm.css"

const SightingsForm = (props) => {
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/sightings/${id}`)
        .then((response) => {
          console.log(response.data);
          setUsername(response.data.username);
          setTitle(response.data.title);
          setAddress(response.data.address);
          setCity(response.data.city);
          setState(response.data.state);
          setDescription(response.data.description);
          setimageUrl(response.data.imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dfqdc8mjr",
        uploadPreset: "pmekgbnz",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          setimageUrl(result.info.url);
        }
      }
    );
    widget.open();
  };

  return (
		<div className="container">
			<div className="columns">
				<div className="column is-6 is-offset-3">
					<div className="field">
						
						<div className="control">
							<input
								id="username"
								className="input"
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<input
								id="title"
								className="input"
								type="text"
								placeholder="Sighting name"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
					</div>

					<div className="field">
						<input
							id="address"
							className="input"
							type="text"
							placeholder="Street address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>

					

					<div className="field is-grouped">
						<input
							className="input"
							type="text"
							placeholder="City"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>

						<div className="control">
							<div className="select">
								<select
									value={state}
									onChange={(e) => setState(e.target.value)}
								>
									<option>Select State</option>
									<option>AL</option>
									<option>AK</option>
									<option>AZ</option>
									<option>AR</option>
									<option>CA</option>
									<option>CO</option>
									<option>CT</option>
									<option>DE</option>
									<option>FL</option>
									<option>GA</option>
									<option>HI</option>
									<option>IA</option>
									<option>ID</option>
									<option>IL</option>
									<option>IN</option>
									<option>KS</option>
									<option>KY</option>
									<option>LA</option>
									<option>MA</option>
									<option>MD</option>
									<option>ME</option>
									<option>MI</option>
									<option>MN</option>
									<option>MO</option>
									<option>MS</option>
									<option>MT</option>
									<option>NC</option>
									<option>ND</option>
									<option>NE</option>
									<option>NH</option>
									<option>NJ</option>
									<option>NM</option>
									<option>NV</option>
									<option>NY</option>
									<option>OH</option>
									<option>OK</option>
									<option>OR</option>
									<option>PA</option>
									<option>RI</option>
									<option>SC</option>
									<option>SD</option>
									<option>TN</option>
									<option>TX</option>
									<option>UT</option>
									<option>VA</option>
									<option>VT</option>
									<option>WA</option>
									<option>WI</option>
									<option>WV</option>
									<option>WY</option>
								</select>
							</div>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<textarea
								className="textarea"
								placeholder="Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
					</div>

					<div className="columns">
						<div className="column is-3 is-offset-3">
							<div className="field upload">
								<div id="photo-container">
									<button onClick={showWidget}>Upload Image</button>
								</div>

								<p className="control has-icons-left">
									<input
										id="imageUrl"
										className="input"
										type="text"
										value={imageUrl}
										onChange={(e) => setimageUrl(e.target.value)}
									/>
									<span className="icon is-small is-left">
										<i className="fa fa-camera"></i>
									</span>
								</p>
							</div>
							
						</div>
					</div>

					<div className="field is-grouped">
						<div className="control">
							<button
								className="button is-link is-outlined"
								onClick={(e) => {
									props.handleFormSubmit(e, {
										username,
										title,
										address,
										city,
										state,
										description,
										imageUrl,
									});
								}}
							>
								{props.buttonText}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SightingsForm;
