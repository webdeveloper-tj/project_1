import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header({ setTitlename }) {
  return (
    <div className="header container-fluid">
      <div className="nav container  align-items-center">
        <h1 className="d-none d-sm-block col-2">Books</h1>
        <div className="col-12 col-sm-4 offset-sm-1 col-xl-4">
          <form>
            <input
              type="search"
              className="form-control"
              placeholder="Search here..."
              onChange={(e) => setTitlename(e.target.value)}
            />
          </form>
        </div>
        <div className="col-2 d-none d-sm-block offset-1">
          <NavLink to="/log_in" className="btn btn-outline-dark">
            Log in
          </NavLink>
        </div>
        <div className="col-2 d-none d-sm-block">
          <NavLink to="/about" className="btn btn-outline-dark">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
