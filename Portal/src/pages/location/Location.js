import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { getUser } from "../../components/Utils/Common";


function Location() {
  const [data, setData] = useState("");

  useEffect(() => {
    const user = getUser();
    const token = user[0].token;

    axios.post('http://localhost:3000/emp/getLocationDetails', {
      token: token
    }).then((response) => {
      setData(response.data);
    });
  }, []);
  if (!data) {
    return("Loading...")
  }
  return (
    <>
      <PageTitle title="Work Location" />
      <h2>Department: "{data[0].dept}"</h2>
      <h2>Sub Department: "{data[0].subdept}"</h2>
      <h2>Location: "{data[0].location}"</h2>
    </>
  );
}

export default Location;