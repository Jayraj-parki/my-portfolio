import React from "react";
import style from "./internship.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import InternCard from "../internCard/InternCard";

export default function Internship() {
  return (
    <div className={style.Internship + " container-fluid p-0  py-4 "}>
      <div className={style.qualTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my
          Internships
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 py-4 d-flex justify-content-between "
        }
      >
        <InternCard
          name="LetsGrowMore Comunity"
          domain="Web developer"
          duration="1 may 2022 - 1 june 2022"
          img="/lgm.jpg"
        />
        <InternCard
          name="TwoWaits Company"
          domain="Full Stack Developer"
          duration="15 april 2022 - 15 may 2022"
          img="/twowaits.jpg"
          up={true}
        />
        <InternCard
          name="The Sparks Foundations"
          domain="Web Development "
          duration="1 april 2022 - 1 may 2022"
          img="/tsf.jpg"
        />
      </div>

      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 py-4 d-flex justify-content-between "
        }
      >
        <InternCard
          name="TCET"
          domain="UI/UX   "
          duration="1 June 2021 - 1 July 2021"
          img="/uiux.jpg"
         
        />
         <InternCard
          name="Oasis InofyBytes"
          domain="Web Development"
          duration="1 april 2022 - 15= may 2022"
          img="/oasis.jpg"
          status="true"
          up={true}
        />
        <InternCard
          name="TCET"
          domain="Web Development "
          duration="1 June 2020 - 1 July 2020"
          img="/webtcet.jpg"
        
        />
       
      </div>
    </div>
  );
}
