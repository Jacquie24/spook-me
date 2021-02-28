import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import SightingsForm from "../../Components/SightingsForm/SightingsForm";


const EditSighting = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        axios
          .put(`/api/sightings/${id}`, formObject)
          .then((response) => {
            console.log(response.data);
            history.push(`/sightings/${response.data._id}`);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <div className="container">
          <SightingsForm
              handleFormSubmit={handleFormSubmit}
              buttonText="Update"
              />

          </div>
      );
    };

export default EditSighting;