import React from "react";
import features from "../../images/feature.png";
import top from "../../images/top.png";
import style from "./features.module.css";
const Features = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={features} alt="features" />
          <h3> Features</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>

      <div className={style.featuresMenu}>
        <div>
          <h3> Activities</h3>
          <ul>
            <li>Sauna</li>
            <li> Swimming</li>
            <li> Swimming pool (outdoor)</li>
          </ul>
        </div>

        <div>
          <h3> General</h3>
          <ul>
            <li>Garden</li>
            <li>Kitchen</li>
            <li>Patio</li>
          </ul>
        </div>

        <div>
          <h3> Services</h3>
          <ul>
            <li>Free toiletries</li>
            <li>Free Wi-Fi</li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
