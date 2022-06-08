import React from "react";
import EngCard from "../engCard/EngCard";
import QualCard from "../qualCard/QualCard";
import style from "./qual.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
export default function Qualification() {
  return (
    <div id="qualification" className={style.qualification + " container-fluid p-0  py-4 "}>
     <div className={style.qualTitle+ " row col-10 mx-auto "}>
          <h3 className="d-flex  align-items-center">
            <DoubleArrowOutlinedIcon className={style.icon}/> Look at my Qualification
          </h3>
        </div>
      <div
        className={
          style.wrapper +
          " row col-lg-10 col-xl-8  mx-auto p-0 py-4 d-flex justify-content-between "
        }
      >
        
        <div class=" mb-3 col-md-6 px-md-3 p-lg-0 d-flex justify-content-between flex-wrap">
          <QualCard
            std="10"
            name="gandhi vidya mandir school"
            marks="90.8"
            year="2007-17"
            board={"Mht ssc Board"}
          />
          <QualCard
            std="12"
            name="st. anne's JR. college"
            marks="83.54"
            year="2017-2019"
            board={"mht hsc Board"}
          />
        </div>
        <div class=" mb-3  col-md-6 px-md-3 p-lg-0  px-3 ">
          <EngCard
            std="B.Tech / Information Technology"
            name="thakur college of engineering & technology"
            fe={"9.88"}
            se={"9.96"}
            te={"9.67"}
            be="----"
            year="2019-2023"
            board={"Mumbai university"}
          />
        </div>
      </div>
    </div>
  );
}
