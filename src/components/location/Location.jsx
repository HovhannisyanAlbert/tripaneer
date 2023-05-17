import React from "react";
import location from "../../images/location.png";
import top from "../../images/top.png";
import style from "./location.module.css";
const Location = () => {
  return (
    <div className={style.location}>
      <div className={style.containerLocation}>
        <div>
          <img src={location} alt="location" />
          <h3>Location</h3>
        </div>
        <img src={top} alt="top" width={15} height={15} />
      </div>
      <span>
        This holiday will take place in Palombara Sabina, Italy. It's a quiet
        rural area, located just thirty minutes away from Rome.
      </span>

      <div>
        <h3> Nearby places</h3>
        <div>
          <ul>
            <li>Farfa Abbey - 30 minutes </li>
            <li> Monterotondo - 10 minutes</li>
            <li> Monti Lucretili Regional Natural Park - 30 minutes</li>
            <li>Mount Terminillo - 1 hour 30 minutes </li>
            <li>Nazzano Regional Natural Reserve - 40 minutes </li>
            <li>Palombara Sabina - 10 minutes </li>
            <li>Rome - 35 minutes </li>
            <li>Sanctuary of Santa Maria in Vescovio - 40 minutes </li>
            <li>Tivoli - 30 minutes </li>
            <li> Train station of Pianabella di Montelibretti - 3 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
