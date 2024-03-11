import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function About() {
  return (
    <div className="container">
      <h1 className="display-1 text-secondary">Hello Lorem</h1>
      <p className="text-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        perferendis distinctio debitis iste deleniti numquam nihil voluptatum
        saepe quo impedit, maiores ab voluptates quia! Quo ipsam distinctio
        corrupti sit velit!
      </p>
      <Link style={{ fontSize: "1.5rem", color: "black" }} to="/">
        <Icon.House />
      </Link>
    </div>
  );
}

export default About;
