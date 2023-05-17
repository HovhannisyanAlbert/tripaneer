import React from 'react'
import minus from "../../images/minus.svg"
import style from "./hight.module.css"
const HightButton = () => {
  return (
    <div className={style.hight}>

        <button className={style.hideButton}> <img src={minus} alt='minus'/> Hide all </button>
    </div>
  )
}

export default HightButton