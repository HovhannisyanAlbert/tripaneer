import React from 'react'
import TripanerMenu from './components/trpannerMenu/TripanerMenu'
import LocationTripanner from './components/locationTripanner/LocationTripanner'
import OverViewCooking from './components/overviewCooking/OverViewCooking'
import MeetInstructor from './components/meetInstructor/MeetInstructor'
import Highlights from './components/highlights/Highlights'
import HightButton from './components/hightButton/HightButton'
import Accommodation from './components/accommodation/Accommodation'
import Program from './components/program/Program'
import IncludedExcursions from './components/includedExcursions/IncludedExcursions'
import styles from './Router.module.css'
import Instructors from './components/instructors/Instructors'
import Location from './components/location/Location'
import Features from './components/features/Features'
import Food from './components/food/Food'
import Things from './components/things/Things'
import Spa from './components/spa/Spa'
import WhatsIncluded from './components/whatsIncluded/WhatsIncluded'
import DontIncluded from './components/dontIncluded/DontIncluded'
import Airport from './components/airport/Airport'
import ShareList from './components/RightComponents/shareList/ShareList'

const Router = () => {
  return (
    <div className={styles.container}>
    <TripanerMenu />
    <LocationTripanner />
    
    <div className={styles.box}>
      <div>
    <OverViewCooking />
    <MeetInstructor />
    <Highlights />
    <HightButton />
    <Accommodation />   
    <Program />
    <IncludedExcursions />
    <Instructors />
    <Location />
    <Features />
    <Food />
    <Things />
    <Spa />
    <WhatsIncluded />
    <DontIncluded />
    <Airport />
    </div>
      <ShareList />
    </div>
    </div>
  )
}

export default Router