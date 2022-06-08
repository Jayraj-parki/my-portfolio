import React from "react";
import style from "./comment.module.scss";
import 'swiper/css'
import 'swiper/css/pagination'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination} from "swiper"
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
export default function Comments() {
  const arr=[1,2,3,4,5,6,7,8]
  return (
    <div id="review" className={style.comment + " container-fluid p-0  py-4 "}>
      <div className={style.commentTitle + " row col-10 mx-auto "}>
        <h3 className="d-flex  align-items-center">
          <DoubleArrowOutlinedIcon className={style.icon} /> Beautiful comments on my work
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
         breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1.5,
          },
        }}
         grabCursor={true}
         pagination={{clickable:true}}
         className="p-3"
        >
          {
            arr?.map((val,id)=>
            <SwiperSlide>
              <img className="w-100 mb-5" src={`/images/comments/${val}.png`} alt=".." />
            </SwiperSlide>
              
            )
          }
        </Swiper>
      </div>
    </div>
  );
}
