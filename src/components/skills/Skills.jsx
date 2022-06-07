import React from "react";
import style from "./skills.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import Languages from "../languages/Languages";

export default function Skills() {
  return (
    <div className={style.skills + " py-5"}>
      <div className={style.title + " row col-10 mx-auto mb-3"}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my
          Technical Skills
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-8  mx-auto p-0 d-flex justify-content-between "
        }
      >
        <Languages />
      </div>
    </div>
  );
}
