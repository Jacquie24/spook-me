import React, { useEffect, useState } from "react";
import axios from "axios";

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

  

export default AllUsers;