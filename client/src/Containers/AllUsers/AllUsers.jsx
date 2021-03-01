import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((users) => (
          <div className="col s4" key={users._id}>
            <div className="row">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={users.featuredImageUrl}
                      alt={users.name}
                    />
                    <span className="card-title">{users.name}</span>
                  </div>
                  <div className="card-content">
                    <p>{users.address}</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/users/${users._id}`}>Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;