import React from "react";
import { Link } from "react-router-dom";
import rutgersEsportsLogo from "../images/rutgersesports-logo.png";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="nav">
      <div className="esports-logo">
        <Link to="/">
          <img src={rutgersEsportsLogo} alt="Rutgers Esports Logo" />
        </Link>
      </div>
    </div>
  );
}
