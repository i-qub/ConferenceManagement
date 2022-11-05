import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { getUser } from "../../components/Utils/Common";


function UserProfile() {
  const [data, setData] = useState("");

  useEffect(() => {
    const user = getUser();
    const token = user[0].token;

    axios.post('http://localhost:1020/getLocationDetails', {
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
      <PageTitle title="User Profile" />

    </>
  );
}

export default UserProfile;