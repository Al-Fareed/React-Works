import React from "react";
import { Link } from "react-router-dom";


export default function Nav({darkMode,darkModeHandler}) {
  
  const modeHandler=(e)=>{
    darkModeHandler();
  }
  // Compile model from schema
  return (
    <>

    
      {/* Navgation bar */}
      <nav className={`navbar navbar-expand-lg navbar-${darkMode} bg-${darkMode}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Text Editor
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              
                <Link className="nav-link active" to="/about">
                <li className="nav-item">
                  About</li>
                </Link>
              
            </ul>
            {/* Switch for changing mode  */}
            <div className="form-check form-switch mx-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={modeHandler}
              />
              <label className={`form-check-label text-${darkMode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
            {/* Search bar and button */}
            <form form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
