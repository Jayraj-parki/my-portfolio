import React from "react";
import style from "./engCard.module.scss";
export default function EngCard({ name, fe, se, te, be, year, std, board }) {
  return (
    <div
      className={
        style.engCard +
        " row  mt-4  col-11  p-0  ms-auto  d-flex justify-content-center align-items-center"
      }
    >
      <div className={"col-12 p-0"}>
        <div
          className={
            style.box +
            " col-12 d-flex mb-3 justify-content-center align-items-center "
          }
        >
          <span>{std}</span>
        </div>
      </div>
      <div className={"col-12"}>
        <div className="">
          <h5 className=" mb-2">{name}</h5>
          <h6 className=" mb-2">{board}</h6>
          <small className="text-muted">{year}</small>
          <div className=" mt-2 row col-12 mx-auto">
            <div className={" mb-2 col-6 d-flex justify-content-start align-items-center  "}>
              <span
                className={
                  style.circle +
                  " col-auto d-flex me-3 justify-content-center align-items-center"
                }
              >
                FE
              </span>
              <span className="col-auto">{fe}</span>
            </div>
            <div className={" mb-2 col-6 d-flex justify-content-start align-items-center "}>
              <span
                className={
                  style.circle +
                  " col-auto d-flex justify-content-center me-3 align-items-center"
                }
              >
                SE
              </span>
              <span className="col-auto">{se}</span>
            </div>
            <div className={" col-6  d-flex justify-content-start align-items-center"}>
              <span
                className={
                  style.circle +
                  " col-auto d-flex justify-content-center me-3 align-items-center"
                }
              >
                TE
              </span>
              <span className="col-auto">{te}</span>
            </div>
            <div className={" mb-2 col-6 d-flex justify-content-start align-items-center"}>
              <span
                className={
                  style.circle +
                  " col-auto d-flex justify-content-center me-3 align-items-center"
                }
              >
                BE
              </span>
              <span className="col-auto">{be}</span>
            </div>
          </div>

         
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
