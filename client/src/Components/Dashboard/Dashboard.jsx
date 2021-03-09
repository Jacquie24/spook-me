import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Title</th>
            <th>Photo</th>
            <th>City</th>
            <th>State</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {props.user?.sightings?.map((sighting) => (
            <tr key={sighting._id}>
              <td><Link to={`/sightings/${sighting._id}`} className="sightingLink">{sighting.title}</Link></td>
              <td>
                <figure className="image is-96x96">
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
