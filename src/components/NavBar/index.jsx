import { Link } from "react-router-dom";
import "./css/style.css";

export const NavBar = ({ handleMouseEnter, handleMouseLeave, actived }) => {
 const Subscribe = () => window.open('#', "_self")
  //Implement here selected tab
  return (
    <nav className="nav">
      <div className="logo">
        <Link className={`links`} to="/">
          <span>Logo</span>
        </Link>
      </div>
      <ul className="lists">
        <li className={`items`}>
          <Link
            className={`links ${actived === "home" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className={`items`}>
          <Link
            className={`links ${actived === "about" ? "active" : ""}`}
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li className={`items`}>
          <Link
            className={`links ${actived === "programs" ? "active" : ""}`}
            to="/programs"
          >
            Programs
          </Link>
        </li>
        <li className={`items`}>
          <Link
            className={`links ${actived === "mentors" ? "active" : ""}`}
            to="/mentors"
          >
            Mentors
          </Link>
        </li>
        <li className={`items`}>
          <Link
            className={`links ${actived === "startups" ? "active" : ""}`}
            to="/startups"
          >
            Start Ups
          </Link>
        </li>
        <li className={`items`}>
          <Link
            className={`links ${actived === "contact" ? "active" : ""}`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="button-area"
        id="area"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="button" id="button" onClick={Subscribe}>
          Get started
        </button>
      </div>
    </nav>
  );
};
