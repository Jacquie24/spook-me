import React, { useEffect, useState } from "react";
// import React from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

//what will the single sighting container require:
//take in the user id and display it to the page, it will use the params to pull the id from the url and use that to show the information.
//what is this container going to be used for exactly

// how will i seed the data, how did jonathan get his data into his single restaurant view?

const SingleUser = () => {
  const [user, setUser] = useState({});
  //   const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((response) => {
          console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapertag.com/wallpaper/full/a/c/a/346463-spooky-background-1920x1080-hd-for-mobile.jpg")`, height : "100vh"
      }}
    >
      <div className="container mb-5 mt-5">
        <div className="card mb-5 mt-5 pt-5 pb-5">
          <header className="card-header" />
          <p className="card-header-title">User Dashboard</p>
          <div className="card-content">
            <div className="content">
              {user.firstName+ " " + user.lastName}
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="card mb-5 mt-5 pt-5 pb-5">
          <header className="card-header" />
          <p className="card-header-title">User Dashboard</p>
          <div className="card-content">
            <div className="content">
              This is a super spooky house 
              {user?.sightings?.map(sighting => (
                  <div>sighting</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
