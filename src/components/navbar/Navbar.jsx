import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import style from "./navbar.module.scss";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
export default function Navbar() {
  return (
    <>
      <nav className={style.navbar + " navbar navbar-expand-lg  pt-4"}>
        <div className={style.container + " container"}>
          <Link className="navbar-brand" smooth to="#">
            <span className={style.logo + " d-flex align-items-center"}>
              <InsertEmoticonIcon className={style.icon} />
              My Portfolio
            </span>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className={"nav-link"} smooth to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#qualification">
                  Qualification
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#internship">
                  Internship
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#certificate">
                  Certifications
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#service">
                  Services
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" smooth to="#hobbies">
                  Hobbies
                </Link>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link d-flex align-items-center" smooth to="#contact">
                    <ContactPageOutlinedIcon />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
