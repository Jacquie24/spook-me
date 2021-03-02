import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import googleMap from "../../Components/GoogleMap/GoogleMap";
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
      // .get(`/api/sightings`)
      .get(`/api/sightings/${id}`)
      .then((response) => {
        console.log(response.data);
        setSighting(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  //id

  return (
    <div className="container">
<section className="hero is-fullheight">
      {/* style={{ */}
      {/* //   backgroundImage: "url('https://wallpapertag.com/wallpaper/full/a/c/a/346463-spooky-background-1920x1080-hd-for-mobile.jpg')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   height: "100%"
      // }} */}


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
              </div>
              <div className="column">
                <p className="bd-notification is-info">Second nested column</p>
                <div className="card mb-2">
                  <div className="card-content">
                    <div className="content">
                      {sighting.title} <br></br>
                      {sighting.description}
                    </div>
                  </div>
                </div>
                {/* this is the second card */}
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      {sighting.address} <br></br>
                      {sighting.city} <br></br>
                      {sighting.state} <br></br>
                      Google maps will probably go here.
                      {googleMap}

                      {/* { sighting } */}
                    </div>
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
