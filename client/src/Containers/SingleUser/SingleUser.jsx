import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import axios from "axios";

//what will the single sighting container require:
//take in the user id and display it to the page, it will use the params to pull the id from the url and use that to show the information.
//what is this container going to be used for exactly

// how will i seed the data, how did jonathan get his data into his single restaurant view?

const SingleUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
    const { id: userId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  

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
      <div className="container mb-5 mt-5">
        <div className="card mb-5 mt-5 pt-5 pb-5">
          <header className="card-header" />
          <p className="card-header-title">User Dashboard</p>
          <div className="card-content">
            <div className="content">
              {user.username}
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="card mb-5 mt-5 pt-5 pb-5">
          <header className="card-header" />
          <p className="card-header-title">All of your sightings</p>
          <div className="card-content">
            <div className="content">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    {/* <th>Picture</th> */}
                    <th>Title</th>
                    {/* <th className="center-align">Image</th> */}
                    <th>City</th>
                    <th>State</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody className="table-body">
                  {user?.sightings?.map((sighting) => (
                    <tr>
                      <td>{sighting.title}</td>
                      <td>{sighting.city}</td>
                      <td>{sighting.state}</td>
                      <td>
                        <Link to={`/sightings/${sighting._id}/edit`}>
                          <button className="button">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="button"
                          onClick={() => {
                            handleDeleteClick(sighting._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
