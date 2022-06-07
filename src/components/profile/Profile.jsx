
import { Button } from '@mui/material'
import React from 'react'
import style from "./profile.module.scss"
export default function Profile() {
  return (
    <>
    <div className={style.profile+" container-fluid  p-0  py-5 "}>
        <div className={style.wrapper+" row col-10  mx-auto p-3 d-flex justify-content-between "}>
            <div className={style.content+" col-8"}>
                <h1 className='m-0'>MERN STACK</h1>
                <h2 className='m-0'>Developer</h2>
                <p className='row col-10 ps-4 my-3'>I am Jayraj parki ~ A MERN stack developer | I seek challenging opportunities where I can fully use my skills.   </p>
                <Button className=' mt-4 py-2 px-5 '>Drop a mail</Button>
            </div>
            <div className={style.profileImage+" col-4 "}>
                <img className='ms-auto d-flex w-100 rounded' src="/images/profile.jpg" alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
