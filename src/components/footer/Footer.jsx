import React from "react";
import style from "./footer.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function Footer() {
  return (
    <div className={style.footer + " pt-5"}>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 d-flex justify-content-between "
        }
      >
        <div className={style.email + " col-6"}>
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className={
                style.icon +
                "  d-flex justify-content-center align-items-center"
              }
            >
              <EmailIcon />
            </div>
            <h5 className="col-auto">Jayrajparkicet@gmail.com</h5>
          </div>
        </div>
        <div className={style.phone + " col-6"}>
          <div className="row  d-flex justify-content-center align-items-center">
            <div
              className={
                style.icon +
                "  d-flex justify-content-center align-items-center"
              }
            >
              <LocalPhoneIcon />
            </div>
            <h5 className="col-auto">+91 9082934394</h5>
          </div>
        </div>
        <hr className="my-3"/>
        <div className={style.profiles + " col-3  my-3 p-2"}>
          <div className="row col-12  mx-auto ">
            <h3 className="row col-12 mx-auto">My Profiles</h3>
            <ul className={" col-auto  "}>
              <li className=" mb-2">Github</li>
              <li className=" mb-2">Linkedin</li>
              <li className=" mb-2">HackerRank</li>
              <li className=" mb-2">CodeChef</li>
            </ul>
          </div>
        </div>

        <div className={style.socialMedia + " col-3 my-3 p-2"}>
          <div className="row col-12  mx-auto ">
            <h3 className="row col-12 mx-auto">Social Media</h3>
            <ul className={" col-auto   "}>
              <li className=" mb-2">Instagram</li>
              <li className=" mb-2">Linkedin</li>
              <li className=" mb-2">facebook</li>
            </ul>
          </div>
        </div>
        <div className={style.projects + " col-3 my-3 p-2"}>
          <div className="row col-12  mx-auto ">
            <h3 className="row col-12 mx-auto">Projects</h3>
            <ul className={" col-auto "}>
              <li className=" mb-2">Movie Recommendation System</li>
              <li className=" mb-2">Afiliate Marketing Website </li>
              <li className=" mb-2">Know your Health</li>
              <li className=" mb-2">My Gallary Store</li>
              <li className=" mb-2">Daily Notes</li>
            </ul>
          </div>
        </div>
        <div className={style.publication + " col-3 my-3 p-2"}>
          <div className="row col-12  mx-auto ">
            <h3 className="row col-12 mx-auto">My Publication</h3>
            <ul className={" col-auto "}>
              <li className=" mb-2">System for Anamia Eliminating in Women & Child and Providing Nutrtional Food</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className={style.copyright + " row col-12 mx-auto"}>
        <h6 className="text-center p-3">
          &copy; All Copyrights are reserved by Jayraj Parki
        </h6>
      </div>
    </div>
  );
}
