import React from "react";
import Certificates from "../../components/certificates/Certificates";
import CodingProfile from "../../components/codingProfile/CodingProfile";
import Footer from "../../components/footer/Footer";
import Internship from "../../components/internship/Internship";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Qualification from "../../components/qualification/Qualification";
import Skills from "../../components/skills/Skills";
import style from "./home.module.scss";
export default function Home() {
  return (
    <div className={style.home + " container-fluid p-0"}>
      <div className={style.wrapper}>
        <Navbar />
        <Profile />
        <CodingProfile />
        <Qualification />
        <Internship />
        <Skills />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}
