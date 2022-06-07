import React from "react";
import style from "./project.module.scss";
import 'swiper/css'
import 'swiper/css/pagination'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination} from "swiper"
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
export default function Project() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className={style.project + " container-fluid p-0  py-4 "}>
      <div className={style.projectTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Look at my Recent Projects
        </h3>
      </div>
      <div
        className={
          style.wrapper +
          " row col-10  mx-auto p-0 py-4 d-flex justify-content-between flex-column "
        }
      >
        <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3.2}
        grabCursor={true}
        pagination={{clickable:true}}
        className="p-3"
        >
          {
            arr?.map((val,id)=>
            <SwiperSlide key={id}>
              <img className="w-100 mb-5" src={`/images/projects/${val}.png`} alt=".." />
            </SwiperSlide>
              
            )
          }
        </Swiper>
      </div>
    </div>
  );
}
