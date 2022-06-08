import React from "react";
import style from "./internship.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import InternCard from "../internCard/InternCard";

export default function Internship() {
  return (
    <div id="internship" className={style.Internship + " container-fluid p-0  py-4 "}>
      <div className={style.qualTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my
          Internships
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-xl-10  mx-auto p-0 py-4 d-flex justify-content-between "
        }
      > 
        <InternCard
          name="LetsGrowMore Comunity"
          domain="Web developer"
          duration="1 may 2022 - 1 june 2022"
          img="/lgm.jpg"
          code="https://github.com/Jayraj-parki/LGMVIP-WEB-3"
          certificate="https://www.linkedin.com/posts/jayraj-parki-b348a61a7_certificate-of-completion-activity-6939077647125614592-PqDp?utm_source=linkedin_share&utm_medium=member_desktop_web"
        />
        <InternCard
          name="TwoWaits Company"
          domain="Full Stack Developer"
          duration="15 april 2022 - 15 may 2022"
          img="/twowaits.jpg"
          up={true}
          code="https://github.com/Jayraj-parki/tathastu-internship"
          certificate="https://www.linkedin.com/posts/jayraj-parki-b348a61a7_certificate-of-internship-activity-6930937097671315456-VNzN?utm_source=linkedin_share&utm_medium=member_desktop_web"
        />
        <InternCard
          name="The Sparks Foundations"
          domain="Web Development "
          duration="1 april 2022 - 1 may 2022"
          img="/tsf.jpg"
          code="https://github.com/Jayraj-parki/The-Sparks-Foundation"
          certificate="https://www.linkedin.com/posts/jayraj-parki-b348a61a7_gripapril22-thesparksfoundation-certificateofcompletion-activity-6927114525569626113-wdJH?utm_source=linkedin_share&utm_medium=member_desktop_web"
        />
      </div>

      <div
        className={
          style.wrapper +
          " row col-xl-10  mx-auto p-0 py-4 d-flex justify-content-between "
        }
      >
        <InternCard
          name="TCET"
          domain="UI/UX   "
          duration="1 June 2021 - 1 July 2021"
          img="/uiux.jpg"
          code="https://www.figma.com/file/3XXyy4XlMvionGCLofXUEJ/Restaurent-Menu"
        certificate={false}
        />
        <InternCard
          name="Oasis InofyBytes"
          domain="Web Development"
          duration="1 april 2022 - 15= may 2022"
          img="/oasis.jpg"
          status="true"
          code="https://github.com/Jayraj-parki/-OIBSIP_Task3"
          up={true}
        certificate={"https://www.linkedin.com/posts/jayraj-parki-b348a61a7_certificate-of-completion-activity-6926013241563262977-a4hS?utm_source=linkedin_share&utm_medium=member_desktop_web"}
        />
        <InternCard
          name="TCET"
          domain="Web Development "
          duration="1 June 2020 - 1 July 2020"
          img="/webtcet.jpg"
          code="https://github.com/Jayraj-parki/Electricity-billing-and-consumers-database"
        certificate={false}
        />
      </div>
    </div>
  );
}
