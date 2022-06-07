import React from "react";
import style from "./services.module.scss";

export default function ServiceCard({ img, name, info }) {
  return (
    <div
      className={
        style.serviceCard +
        " row  mt-4  col-12   p-0  mx-auto   d-flex justify-content-center align-items-center"
      }
    >
      <div className={style.image+" col-12  p-1  m-0"}>
        <img className={"w-100 rounded shadow "} src={`/images/${img}`} alt="" />
      </div>

      <div className={style.content + "  col-12 p-3"}>
        <div className="row col-12 mx-auto mb-3">
          <h5 className=" mb-2">{name}</h5>
          <small className="">{info}</small>
        </div>
      </div>
    </div>
  );
}
