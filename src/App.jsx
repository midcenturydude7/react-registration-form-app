import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" elemet={<LinkPage />} />
        <Route path="unauthorized" elemet={<Unauthorized />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="admin" element={<Admin />} />
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* Catchall */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
