import React from 'react'
import ListSocial from './list/List'
import Review from './review/Review'
import Pricing from './pricing/Pricing'
import ImageBlock from './imageblock/ImageBlock'
import Payaments from './payaments/Payaments'
import CardBlock from './gifCard/CardBlock'
import TextBlock from './textBlock/TextBlock'

const ShareList = () => {
    return(
        <div>
           <ListSocial />
           <Review />
           <Pricing />
           <ImageBlock />
           <Payaments />
           <CardBlock />
           <TextBlock />
        </div>
    )
}
export default ShareList