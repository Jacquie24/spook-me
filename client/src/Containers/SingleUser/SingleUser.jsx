// import React, { useEffect, useState } from 'react';
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
// import { useParams } from "react-router-dom";
// import axios from "axios";

//what will the single sighting container require:
//take in the user id and display it to the page, it will use the params to pull the id from the url and use that to show the information.
//what is this container going to be used for exactly


// how will i seed the data, how did jonathan get his data into his single restaurant view?  

const SingleSighting = () => {
  // const [sighting, setSighting] = useState({});
  // const { id } = useParams();
  // useEffect(() => {
  //     axios
  //     .get(`/api/sighting/${id}`)
  //     .then((response) => {
  //         setSighting(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  return (
    <div style={{ 
        backgroundImage: `url("https://wallpapertag.com/wallpaper/full/a/c/a/346463-spooky-background-1920x1080-hd-for-mobile.jpg")` 
      }}>
      
      <NavBar />
      <div className="container">
          
        <div className="columns mt-5">
          <div className="column">
            <p className="bd-notification is-info">First column</p>
            <div className="columns is-mobile">
              <div className="column">
                <p className="bd-notification is-info">First nested column</p>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://www.visitsavannah.com/sites/default/files/styles/large_square/public/original-marshall-house.jpg?itok=wT9khAzR"
                        alt="Marshall House"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <p className="bd-notification is-info">Second nested column</p>
                <div className="card mb-2">
                  <div className="card-content">
                    <div className="content">
                      This is a super spooky house . Donec id elit non mi porta
                      gravida at eget metus. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Cras
                      mattis consectetur purus sit amet fermentum. Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Eum
                      consectetur molestias, velit laudantium veritatis
                      repellendus sit saepe debitis. Veniam labore ut quia
                      repellendus nam quae doloribus itaque, esse fugit harum?
                      {/* { sighting } */}
                    </div>
                  </div>
                </div>
                {/* this is the second card */}
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                    <img
                        src="https://www.visitsavannah.com/sites/default/files/styles/large_square/public/original-marshall-house.jpg?itok=wT9khAzR"
                        alt="Marshall House"
                      />
                      Google map will probably go here. Donec id elit non mi
                      porta gravida at eget metus. Cum sociis natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.
                      Cras mattis consectetur purus sit amet fermentum. Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit. Eum
                      consectetur molestias, velit laudantium veritatis
                      repellendus sit saepe debitis. Veniam labore ut quia
                      repellendus nam quae doloribus itaque, esse fugit harum?
                      {/* { sighting } */}
                    </div>
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

export default SingleSighting;
