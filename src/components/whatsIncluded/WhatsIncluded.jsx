import React from "react";
import yes from "../../images/yes.png";
import top from "../../images/top.png";
import style from "../../global.module.css";
const WhatsIncluded = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={yes} alt="yes" />
          <h3> What's included</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>
      <div>
        <ul>
          <li> 4 hands-on Italian cooking lessons</li>
          <li> Culinary and cultural excursions</li>
          <li> 6 nights’ accommodation</li>
          <li> All meals, including wine, coffee and tea</li>
          <li>
           
            Transfers to and from Rome Airport and the main train stations
          </li>
          <li> Meals during excursions</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatsIncluded;
