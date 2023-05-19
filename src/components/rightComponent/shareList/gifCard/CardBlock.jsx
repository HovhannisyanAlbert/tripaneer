import React from 'react'
import gift from '../../../../images/gift.png'
import small from '../../../../images/giftcard-stack-closed-small.png'
import style from './CardBlock.module.css'
export default function CardBlock() {
  return (
    <div className={style.card}>
        <div className={style.gift}>
            <img src={gift} alt="gift_photo"  title='Photo'/>
            <h4>Gift cards</h4>
        </div>
        <div className={style.gift_two}>
            <img src={small} alt="" />
            <span>The gift of unforgettable experiences.</span>
        </div>
        <div className={style.btn}>
          <span>Buy a gift card</span>
          <span className={style.right}>{'>'}</span>
        </div>
    </div>
  )
}
