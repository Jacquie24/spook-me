import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./SingleUser.css";

import Switch from "../../Components/Switch/Switch";



const SingleUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
    const { id: userId } = useParams();

    // Bring in user information pulled from userId
  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  
// Delete function
  const handleDeleteClick = (id) => {
    axios
      .delete(`/api/sightings/${id}`)
      .then((response) => {
        console.log(response.data);
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapertag.com/wallpaper/full/a/c/a/346463-spooky-background-1920x1080-hd-for-mobile.jpg")`,
        height: "100vh",
      }}
    >
      <div className="container mt-5">
        <div className="card mb-5 mt-5 pt-3 pb-3">
          <header className="card-header" />
          <p className="card-header-title is-centered pb-1">User Dashboard For:</p>
          <div className="card-content pt-1">
            <div className="content" id="userStyle">
              {user.username}
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="card mb-5 mt-5 pt-5 pb-5">
          <header className="card-header" />
          <p className="card-header-title is-centered">Where have you been spooked?</p>
          <div className="card-content">
            <div className="content">
              <Switch user={user} handleDeleteClick={handleDeleteClick} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
