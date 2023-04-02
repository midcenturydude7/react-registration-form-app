import React from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

function Home() {
  const { setAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  async function logout() {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/linkpage");
  }

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/Editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
}

export default Home;
