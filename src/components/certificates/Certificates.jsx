import React from "react";
import style from "./certificate.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import Card from "./Card";
import { certArr } from "./data";
export default function Certificates() {
  return (
    <div className={style.certificate + " container-fluid p-0  py-4 "}>
      <div className={style.certificateTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my License
          & Certificates
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 py-4 d-flex justify-content-between flex-column "
        }
      >
        <div class=" mb-3 col-12 p-0 d-flex justify-content-between flex-wrap">
          {certArr?.map((val, id) => (
            <Card
              key={id}
              img={val.img}
              name={val.name}
              platform={val.platform}
              issued={val.issued}
              link={val.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
