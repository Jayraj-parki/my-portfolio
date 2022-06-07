import React from "react";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import style from "./services.module.scss";

import ServiceCard from "./ServiceCard";
import { Button } from "@mui/material";
export default function Services() {
  return (
    <div className={style.services + " container-fluid p-0  py-5 "}>
      <div className={style.serviceTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my{" "}
          <span className="ms-2">Services</span>
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 py-5 d-flex justify-content-between "
        }
      >
        <div className={style.cv + " col-3"}>
          <Button className="px-3 py-2 ">Download CV</Button>
          <h4 className="p-3 my-4 rounded">12+ Projects</h4>
          <h4 className="p-3 my-4 rounded">4+ Internship</h4>
          <h4 className="p-3 my-4 rounded">1 Publication</h4>
          <ServiceCard
            name="Graphic Designer"
            info="Adobe Illustrator, Adobe Photoshop, Canva, Pics Art, Pixlr"
            img="services/4.jpeg"
          />
        </div>
        <div className={style.card1 + " col-3"}>
          <ServiceCard
            name="Frontend Development"
            info="HTML, CSS, JavaScript, ReactJs, BootStrap, Sass, Material-Ui"
            img="services/1.webp"
          />
        </div>
        <div className={style.card2 + " col-3"}>
          <ServiceCard
            name="Backend Development"
            info="Nodejs, ExpressJs, NextJs, Socket.io, Php, MySql, MongoDb"
            img="services/2.webp"
          />
          <ServiceCard
            name="Ui/Ux"
            info="Figma, Canva, Photosh, Sketchop, Adobe XD"
            img="services/3.webp"
          />
        </div>
      </div>
    </div>
  );
}
