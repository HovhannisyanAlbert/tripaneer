import React from 'react'
import meet from "../../images/meet.jpg"
import style from "./meet.module.css"
const MeetInstructor = () => {
  return (
    <div className={style.meet}>
        <h3>  Meet the instructors</h3>
        <div>
            <div className={style.container}>
            <div className={style.meetImg}>
                <img src={meet} alt='meet' />
            </div>

            <div className={style.barbara}>
                <strong>Barbara</strong>
                <a href='#'>Read more</a>
            </div>

            </div>
          

        </div>

    </div>
  )
}

export default MeetInstructor