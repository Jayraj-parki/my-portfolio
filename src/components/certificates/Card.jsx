import { Button } from "@mui/material";
import React from "react";
import style from "./certificate.module.scss";

export default function Card({ name, platform, issued, img, link }) {
  return (
    //
    <div
      className={
        style.Card +
        " row  mt-4  col-5  py-2  mx-auto  d-flex justify-content-center align-items-center"
      }
    >
      <div className={"col-md-3"}>
        <div
          className={
            style.circle +
            " col-12 d-flex justify-content-center align-items-center "
          }
        >
            <img className="w-100" src={`images/${img}`} alt="" />
          
        </div>
      </div>
      <div className={"col-md-9"}>
        <div className=" row col-12 mx-auto">
          <h5 className=" mb-2 col-12">{name}</h5>
          <h6 className=" mb-2 col-12 ">{platform}</h6>
          <small className="text-muted col-12">{issued}</small>
          <Button className=" mb-2 col-auto">View Certificate</Button>
        </div>
      </div>
    </div>
  );
}
