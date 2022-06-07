import React from "react";
import style from "./languages.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function Languages() {
  const lang = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "Html",
    "Css",
    "Sass",
    "Reactjs",
    "Nodejs",
    "ExpressJs",
    "NextJs",
    "MySql",
    "MongoDb",
    "Ui/Ux",
  ];

  const knowledge=["Data Structure","DBMS","Algorithms","Problem Solving","Operating System","Computer Networking",'Web Development',"App Development","User Design and Interface"]
  const tools=['Vs Code',"PyCharm","Eclipse IDE","Adobe","Figma","Git Bash","MS Office","Android Studio"]
  return (
    <>
    <div className={style.languages + " py-2 mb-3"}>
      <div className={style.title + " row col-12 mx-auto m-0 p-0  "}>
        <h5 className="d-flex  align-items-center p-0 mb-3">
          <ArrowRightIcon /> Languages and Frameworks
        </h5>
      </div>
      <div
        className={
          style.wrapper +
          " row col-12  mx-auto p-0  d-flex justify-content-start "
        }
      >
        {lang?.map((val, id) => (
          <div
            key={id}
            className={style.item + " col-auto m-2  py-2 px-3 "}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
    <div className={style.languages + " py-2 mb-3"}>
      <div className={style.title + " row col-12 mx-auto m-0 p-0  "}>
        <h5 className="d-flex  align-items-center p-0 mb-3">
          <ArrowRightIcon /> Knowledge
        </h5>
      </div>
      <div
        className={
          style.wrapper +
          " row col-12  mx-auto p-0  d-flex justify-content-start "
        }
      >
        {knowledge?.map((val, id) => (
          <div
            key={id}
            className={style.item + " col-auto m-2  py-2 px-3 "}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
    <div className={style.languages + " py-2 "}>
      <div className={style.title + " row col-12 mx-auto m-0 p-0  "}>
        <h5 className="d-flex  align-items-center p-0 mb-3">
          <ArrowRightIcon /> Tools
        </h5>
      </div>
      <div
        className={
          style.wrapper +
          " row col-12  mx-auto p-0  d-flex justify-content-start "
        }
      >
        {tools?.map((val, id) => (
          <div
            key={id}
            className={style.item + " col-auto m-2  py-2 px-3 "}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
