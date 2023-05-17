import React from "react";
import spa from "../../images/spa.png";
import top from "../../images/top.png";
import style from "../../global.module.css";
const Spa = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={spa} alt="spa" />
          <h3> Spa treatments</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>
      <span>
        This boutique resort boasts an Olympic pool, dry sauna, tennis court and
        professional massage therapy on site. Each room has Tuscan olive oil
        based soaps, lotions and other bath amenities. Two rooms include soaking
        tubs in addition to showers. All rooms include custom monogrammed plush
        robes.
      </span>
    </div>
  );
};

export default Spa;
