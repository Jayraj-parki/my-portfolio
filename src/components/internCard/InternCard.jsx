import { Button } from "@mui/material";
import React from "react";
import style from "./internCard.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
export default function InternCard({
  up,
  img,
  name,
  domain,
  duration,
  status,
  code,
  certificate
}) {
  return (
    <div
      id={up ? style.up : "id"}
      className={
        style.internCard +
        " row  mt-4 col-10 col-sm-8 col-md-5  col-lg-3  p-0  mx-auto   d-flex justify-content-center align-items-center"
      }
    >
      <div className={" col-12 p-0 m-0"}>
        <div
          className={
            style.box +
            " col-12 d-flex p-0 justify-content-center align-items-center "
          }
        >
          <img
            className={status ? style.round : " "}
            src={`/images/${img}`}
            alt=""
          />
        </div>
      </div>
      <div className={style.content + " col-12 p-3"}>
        <div className="row col-12 mx-auto mb-3">
          <h5 className=" mb-2">{name}</h5>
          <h6 className=" mb-2">{domain} Intern</h6>
          <small className="text-muted">{duration}</small>
        </div>
        <div className="row col-12 mx-auto mb-3 d-flex justify-content-between">
          <Button onClick={()=>window.open(certificate)} className="col-12 mb-3">
            Certificate  <MilitaryTechIcon className="ms-2" />
          </Button>
          <Button onClick={()=>window.open(code)} className="col-12 ">
            Code <GitHubIcon className="ms-2" />
          </Button>
          {/* <Button className="col-5">
            Demo <PreviewIcon className="ms-2" />
          </Button> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
 