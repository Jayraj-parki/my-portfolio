
import React from "react";
import style from "./hobbies.module.scss";

export default function HobCard({
  
  img,
  name,
  info,
 
}) {
  return (
    <div
      
      className={
        style.hobCard +
        " row  mt-4  col-3  p-0  mx-auto   d-flex justify-content-center align-items-center"
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
            className={"w-100 "}
            src={`/images/${img}`}
            alt=""
          />
        </div>
      </div>
      <div className={style.content + " col-12 p-3"}>
        <div className="row col-12 mx-auto mb-3">
          <h5 className=" mb-2">{name}</h5>
          <small className="text-muted">{info}</small>
        </div>
        
      </div>
      {/* </div> */}
    </div>
  );
}
 