import React, { useState } from "react";
import style from "./accesibility.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { IconButton } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
export default function Accesibility() {
  const [state, setState] = useState(true);
  const list = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Qualification",
      path: "#qualification",
    },
    {
      name: "Internship",
      path: "#internship",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Certificates",
      path: "#certificate",
    },
    {
      name: "Reviews",
      path: "#review",
    },
    {
      name: "Services",
      path: "#service",
    },
    {
      name: "Hobbies",
      path: "#hobbies",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div
      className={
        style.shortcut +
        " col-auto  d-flex justofy-content-end align-items-center flex-column "
      }
    >
      {!state && (
        <div
          className={
            style.component +
            " row col-12 mx-auto d-flex justofy-content-center align-items-center flex-column"
          }
        >
          {list?.map((val, id) => (
            <Link
            key={id}
              style={{ animationDelay: `${id / 20}s` }}
              onClick={() => setState(true)}
              smooth
              to={val.path}
              className="  col-12 my-1 text-center py-1"
            >
              {val?.name}
            </Link>
          ))}
        </div>
      )}
      <IconButton
        onClick={() => setState(!state)}
        className={
          style.iconButton +
          " row col-auto ms-auto d-flex justofy-content-center align-items-center  mt-3 "
        }
      >
        {state ? (
          <AccessibilityIcon className={style.icon + "  p-0"} />
        ) : (
          <CloseIcon className={style.icon + " p-0"} />
        )}
      </IconButton>
    </div>
  );
}
