import React from "react";
import style from "./coding.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import StarsIcon from "@mui/icons-material/Stars";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
export default function CodingProfile() {
  return (
    <div className={style.codingProfile + " container-fluid p-0   "}>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-3 d-flex justify-content-between "
        }
      >
        <div className={style.profileButton + " col-6 py-3 "}>
          <div className={style.box+" row  col-12 mx-auto  py-3  rounded d-flex justify-content-center"}>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <LinkedInIcon className="me-2"/> Linkedin
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <GitHubIcon className="me-2"/> GitHub
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <CodeIcon className="me-2"/> LeetCode
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <StarsIcon className="me-2"/> HackerRank
              </span>
            </div>
          </div>
        </div>
        <div className={style.data + " col-6 py-3 "}>
          <div className={style.box+" row  col-12 mx-auto  py-3  rounded d-flex justify-content-center"}>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <InstagramIcon className="me-2"/> Instagram
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <FacebookIcon className="me-2"/> Facebook
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <WhatsAppIcon className="me-2"/> WhatsApp
              </span>
            </div>
            <div className={style.button+" col-5 m-2  p-3  rounded"}>
              <span className="d-flex align-items-center">
                <EmailIcon className="me-2"/> Email
              </span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
