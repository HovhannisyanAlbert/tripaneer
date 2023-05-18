import React from 'react'
import style from './Pricing.module.css'
import MyCalendar from '../calendar/MyCalendar'
import BlockPack from '../package/BlockPack'

export default function Pricing() {
  return (
    <div className={style.pricing}>
      <h5>7 days / 6 nights</h5>
      <div className={style.text_div}>
          <span>From</span>
          <b>US$4,500</b>
      </div>
      <p>Pricing information</p>
      <span>There is a single supplement of 500 USD for solo travelers.</span>
      <p>Availability</p>
      <span>This vacation is available all year round with arrival on Sunday. Please select an arrival date below.</span>
      <p className={style.date}>Select arrival date:</p>
      <MyCalendar />
      <p className={style.date}>Select your package:</p>
      <BlockPack  count={1} price={"US$4,500"} villa={"Shared villa - Ground floor"} />
      <BlockPack  count={1} price={"US$4,600"} villa={"Shared villa - Second floor"} />
      <BlockPack  count={1} price={"US$4,700"} villa={"Shared villa - Second floor suite"} />
      <BlockPack  count={2} price={"US$7,600"} villa={"Shared villa - Ground floor"} />
      <BlockPack  count={2} price={"US$7,800"} villa={"Shared villa - Second floor"} />
      <BlockPack  count={2} price={"US$8,000"} villa={"Shared villa - Second floor suite"} />
      <div className={style.global_btns}>
        <div className={style.send}>Send inquiry</div>
        <div className={style.book}>Request to Book</div>
      </div>
    </div>
    
  )
}
