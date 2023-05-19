import React from 'react'
import share from '../../../../images/share.png'
import faceBook from "../../../../images/facebook.png"
import twitter from '../../../../images/twitter.png'
import email from '../../../../images/email.png'
import whatsapp from '../../../../images/whatsapp.png'
import link from '../../../../images/link.png'
import style from './socialList.module.css'
const ListSocial = () => {
    return(
        <div className={style.list_block}>
            <div className={style.share_block}>
                <img src={share} alt="share_icon" title='icon_share' />
                <h2>Share this listing</h2>
            </div>
            <div className={style.social_icons}>
                <div className={style.example}>
                    <img src={faceBook} alt="facebook_icon" title='Facebook' />
                    <span>Facebook</span>
                </div>
                <div className={style.example}>
                    <img src={twitter} alt="twitter_icon" title='Twitter' />
                    <span>Twitter</span>
                </div>
                <div className={style.example}>
                    <img src={email} alt="email_icon" title='Email' />
                    <span>Email</span>
                </div>
                <div className={style.example}>
                    <img src={whatsapp} alt="whatsapp_icon" title='whatsapp' />
                    <span>Whatsapp</span>
                </div>
                <div className={style.example}>
                    <img src={link} alt="getLink_icon" title='getLink' />
                    <span>Get link</span>
                </div>
            </div>
        </div>
    )
}

export default ListSocial