import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";

const EditSighting = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        axios
          .put(`/api/restaurants/${id}`, formObject)
          .then((response) => {
            console.log(response.data);
            history.push(`/restaurants/${response.data._id}`);
          })
          .catch((err) => {
            console.log(err);
          });
      };

export default EditSighting;