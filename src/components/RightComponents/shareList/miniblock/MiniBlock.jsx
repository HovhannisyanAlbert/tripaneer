import React from 'react'
import style from './MiniBlock.module.css'
import stars from '../../../../images/stars.png'
export default function MiniBlock({title}) {
  return (
    <div className={style.mini_block}>
         <span>{title}</span>
        <img src={stars} alt="stars_image" />
    </div>
  )
}
