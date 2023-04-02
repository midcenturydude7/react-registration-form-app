import React from "react";
import { Link } from "react-router-dom";

function Editor() {
  return (
    <section>
      <h1>Editor</h1>
      <br />
      <p>You must have been assigned to an Editor role</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}

export default Editor;
