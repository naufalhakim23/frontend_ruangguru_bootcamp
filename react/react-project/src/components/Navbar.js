import { useEffect, useState } from "react";
import React from "react";

import { getSession, auth } from "../api/auth";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import "./Navbar.css";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import App from "../App";
export default function Navbar() {
  // TODO: answer here
  const [session, setSession] = useState(null);
  const getFromSession = async () => {
    try {
      const session = await getSession();
      setSession(session);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFromSession();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
      <nav className="Container">
        {/* <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes> */}
        <div className="Logo-Container" aria-label="Navbar">
          {/* <Link to="/"> */}
          <h4 aria-label="App Title" href="/">
            InstaClone
          </h4>
          {/* </Link> */}
          <img aria-label="App Logo" src="../logo.svg" alt="" />
        </div>
        <div className="Authentication">
          {session?.data?.user ? (
            <div className="Profile" aria-label="Profile">
              <p>{session.data.user.name}</p>
              {/* <Link to="/profile"> */}
              <img
                aria-label="Profile Image"
                className="user-profile"
                src={session.data.user.image}
                alt=""
                href="/profile"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
              {/* </Link> */}
              <button aria-label="Logout" onClick={() => auth()}>
                Logout
              </button>
            </div>
          ) : (
            <button
              aria-label="Login"
              onClick={() => {
                auth();
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
