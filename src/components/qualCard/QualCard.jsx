import React from "react";
import style from "./qualcard.module.scss";

export default function QualCard({name,marks,year ,std,board}) {
  return (
    //
    <div
      className={
        style.qualCard +
        " row  mt-4  col-12  py-2  mx-auto  d-flex justify-content-center align-items-center"
      }
    >
      <div className={"col-md-3"}>
        <div className={style.circle + " col-12 d-flex justify-content-center align-items-center "}>
          <span>
            {std}<sup>th</sup>
          </span>
        </div>
      </div>
      <div className={"col-md-9"}>
        <div className="">
          <h5 className=" mb-2">{name}</h5>
          <h6 className=" mb-2">{board}</h6>
          <p className=" mb-2">{marks}%</p>
          <small className="text-muted">{year}</small>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
