import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
        <div>
          <Link className="navbar-brand" to="/">
            <img height="70" src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png"/>
          </Link>
        </div>
        <div>
          <ul className="nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/people">People</Link>
            </li>
      			<li className="nav-item">
              <Link className="nav-link link-secondary" to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/demo">Starships</Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorites  
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    4
                  </span>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
