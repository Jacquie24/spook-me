import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th style={{ color: "whitesmoke" }}>Title</th>
            <th style={{ color: "whitesmoke" }}>Photo</th>
            <th style={{ color: "whitesmoke" }}>City</th>
            <th style={{ color: "whitesmoke" }}>State</th>
            <th style={{ color: "whitesmoke" }}>Edit</th>
            <th style={{ color: "whitesmoke" }}>Delete</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {props.user?.sightings?.map((sighting) => (
            <tr>
              <td>{sighting.title}</td>
              <td>
                <figure class="image is-96x96">
                  <img src={sighting.imageUrl} alt={sighting.title} />
                </figure>
              </td>
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
                    props.handleDeleteClick(sighting._id);
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
  );
};

export default Dashboard;
