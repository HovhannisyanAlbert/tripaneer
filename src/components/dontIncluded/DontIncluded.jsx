import React from "react";
import cancel from "../../images/cancel.png";
import top from "../../images/top.png";
import style from "../../global.module.css";
const DontIncluded = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={cancel} alt="cancel" />
          <h3> What's not included</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>
      <div>
        <ul>
          <li> Flights</li>
          <li>Train travels</li>
          <li> Travel insurance</li>
        </ul>
      </div>
    </div>
  );
};

export default DontIncluded;
