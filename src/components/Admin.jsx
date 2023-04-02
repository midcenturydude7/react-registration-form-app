import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Users from "./Users";

function Admin() {
  const navigate = useNavigate();

  function goBack() {
    return navigate(-1);
  }
  return (
    <section>
      <h1>Admin Page</h1>
      <br />
      <Users />
      <div className="flexGrow">
        <button onClick={goBack}>Go back</button>
      </div>
    </section>
  );
}

export default Admin;
