import React from "react";
import Certificates from "../../components/certificates/Certificates";
import CodingProfile from "../../components/codingProfile/CodingProfile";
import Comments from "../../components/comments/Comments";
import Footer from "../../components/footer/Footer";
import Hobbies from "../../components/hobbies/Hobbies";
import Internship from "../../components/internship/Internship";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Project from "../../components/projects/Project";
import Qualification from "../../components/qualification/Qualification";
import Services from "../../components/services/Services";
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
        <hr className="row col-10 mx-auto"/>
        <Internship />
        <Skills />
        <Project/>
        <Comments/>
        <hr className="row col-10 mx-auto"/>
        <Hobbies/>
        <Services/>
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}
