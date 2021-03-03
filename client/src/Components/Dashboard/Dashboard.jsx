import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div>
                          <table className="table">
                <thead className="table-head">
                  <tr>
                    {/* <th>Picture</th> */}
                    <th>Title</th>
                    <th>Image</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody className="table-body">
                  {props.user?.sightings?.map((sighting) => (
                    <tr>
                      <td>{sighting.title}</td>
                      <td><figure class="image is-96x96">
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