import React from 'react'
import price from '../../../../images/price-tag.png'
import okay from '../../../../images/ok.png'
import costumer from '../../../../images/customer-service-agent.png'
import like from '../../../../images/thumb-up.png'
import style from './TextBlock.module.css'
export default function TextBlock() {
  return (
    <div id='ser' className={style.block}>
        <h3>Why choose Tripaneer.com</h3>
        <div className={style.promo}>
            <div className={style.icons}>
                <img src={price} alt="price_icon" title='price' />
                <span>	Largest Selection</span>
            </div>
            <div className={style.icons}>
                <img src={okay} alt="ok_icon" title='ok' />
                <span>Friendly Customer Service	</span>
            </div>
            <div className={style.icons}>
                <img src={costumer} alt="costomer_icon" title='png' />
                <span>Offers for every budget	</span>
            </div>
            <div className={style.icons}>
                <img src={like} alt="like_icon" title='like' />
                <span>	Best Price</span>
            </div>
        </div>
        <h3 id='title'>You might be interested in</h3>
        <p>Holidays in Europe</p>
        <p>Holidays in Italy</p>
    </div>
  )
}
