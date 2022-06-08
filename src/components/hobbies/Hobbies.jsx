import React from "react";
import style from "./hobbies.module.scss";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import HobCard from "./HobCard";

export default function Hobbies() {
  return (
    <div id="hobbies" className={style.hobbies + " container-fluid p-0  py-4 "}>
      <div className={style.hobbiesTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my Hobbies
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-11 col-xxl-10  mx-auto p-0 py-5 d-flex justify-content-between "
        }
      >
        <HobCard
          name="Web Development"
          info="I love being a web developer because I love development. I have done a lot of web development and there are a lot of parts to it. The part that I love is that I can build something and I can see it immediately. "
          img="hobby/1.webp"
        />
        <HobCard
          name="Programing"
          info="Coding is not just typing some cryptic lines on the computer, it solves real world issues. I am able to forward this content to my followers only because coding has empowered us well to communicate in an efficient way as human beings."
          img="hobby/2.jpeg"
          
        />
        <HobCard
          name="Music Listening"
          info="I can’t stand the way that “nothing” sounds. It makes the room spin, it emphasizes every thought inside of my head for better or for worse, it allows me to hear every tiny movement that I make—and I don’t like it."
          img="hobby/3.jpeg"
          
        />
      </div>
    </div>
  );
}
