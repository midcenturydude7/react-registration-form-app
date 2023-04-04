import React from "react";

const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState({});
  const [persist, setPersist] = React.useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
