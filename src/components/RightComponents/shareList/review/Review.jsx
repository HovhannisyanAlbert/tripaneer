import React from 'react'
import style from './Review.module.css'
import stars from '../../../../images/star.png'
import MiniBlock from '../miniblock/MiniBlock'
export default function Review() {
  return (
    <div className={style.review_block}>
        <div className={style.review_stars}>
            <img src={stars} alt="image_stars" />
            <span>1 review</span>
        </div>
        <hr />
        <MiniBlock title={"Value for money"} />
        <MiniBlock title={"Accommodation & facilities"} />
        <MiniBlock title={"Food"} />
        <MiniBlock title={"Location"} />
        <MiniBlock title={"Quality of activity"} />
        <hr />
        <p>I will love you forever! Truly luxurious accommodations, service, beauty, quality. A dream vacation of a lifetime. You will leave an expert...</p>
        <div className={style.text_block}>
            <span className={style.bold}>Teresa Baron-atkinson</span>
            <span>October 20, 2019, United States</span>
        </div>
    </div>
  )
}
