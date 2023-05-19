import React from 'react'
import imgFamaly from '../../../../images/imgforRightComponent.webp'
import location from '../../../../images/placeholder.png'
import mesege from '../../../../images/chat-box.png'
import style from './imageBlock.module.css'

export default function ImageBlock() {
  return (
    <div className={style.image_block}>
        <img src={imgFamaly} alt="img_bank" title='image' />
        <div className={style.image_block_txt}>
        Organized by 
        <b>La Cucina Sabina</b>
        <hr />
        </div>
        <div className={style.image_block_down}>
          La Cucina Sabina is a luxury villa hosting culinary vacation programs combining food, culture, exclusive excursions, and fun into an experience of a lifetime.
        </div>
        <div className={style.img_block_icons}>
            <div className={style.location}>
                <img src={location} alt="location_image" title='image_location' />
                <span>Palombara Sabina (Rome), "italy"</span>
            </div>
            <div className={style.location}>
                <img src={mesege} alt="mesege_image" title='image_mesege' />
                <span>The organizer also speaks: French, Italian</span>
            </div>
           
        </div>
    </div>  
  )
}

