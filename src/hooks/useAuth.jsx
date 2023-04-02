import React from "react";
import AuthContext from "../context/AuthProvider";

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
