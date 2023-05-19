import React from 'react'
import visa from  '../../../../images/payments.png'
import style from './Payaments.module.css'
export default function Payaments() {
  return (
    <div id='ser' className={style.visa}>
        <img src={visa} alt="payaments" title='image_payaments' />
        <p>For this organizer you can guarantee your booking through Tripaneer.com. All major credit cards supported.</p>
    </div>
  )
}
