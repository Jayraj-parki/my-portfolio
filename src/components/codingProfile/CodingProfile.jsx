import React from "react";
import style from "./coding.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import StarsIcon from "@mui/icons-material/Stars";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
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
          <div
            className={
              style.box +
              " row  col-12 mx-auto  py-3  rounded d-flex justify-content-center"
            }
          >
            <div className={style.button + " col-auto  m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <LinkedInIcon className="" />
              </span>
              <span className={style.hoverIcon}>Linkedin</span>
            </div>
            <div className={style.button + " col-auto  m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <GitHubIcon className="" />
              </span>
              <span className={style.hoverIcon}>Git Hub</span>
            </div>
            <div className={style.button + " col-auto  m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <CodeIcon className="" />
              </span>
              <span className={style.hoverIcon}>LeetCode</span>
            </div>
            <div className={style.button + " col-auto  m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <StarsIcon className="" />
              </span>
              <span className={style.hoverIcon}>HackerRank</span>
            </div>
          </div>
        </div>
        <div className={style.data + " col-6 py-3 "}>
          <div
            className={
              style.box +
              " row  col-12 mx-auto  py-3  rounded d-flex justify-content-center"
            }
          >
            <div className={style.button + " col-auto m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <InstagramIcon className="" />
              </span>
              <span className={style.hoverIcon}>Instagram</span>
            </div>
            <div className={style.button + " col-auto m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <FacebookIcon className="" />
              </span>
              <span className={style.hoverIcon}>Facebook</span>
            </div>
            <div className={style.button + " col-auto m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <WhatsAppIcon className="" />
              </span>
              <span className={style.hoverIcon}>Whatsapp</span>
            </div>
            <div className={style.button + " col-auto m-2  p-3  "}>
              <span className={style.icon+" d-flex align-items-center"}>
                <EmailIcon className="" />
              </span>
              <span className={style.hoverIcon}>E - mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
