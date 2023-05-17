import React from "react";
import top from "../../images/top.png";
import bag from "../../images/bag.png";
import style from "./includes.module.css";
const IncludedExcursions = () => {
  return (
    <div className={style.included}>
      <div className={style.includedContainer}>
        <div className={style.bagImage}>
          <img src={bag} alt="bag" />
          <h3> Included excursions </h3>
        </div>
        <img src={top} alt="top" width={15} height={15} />
      </div>

      <div className={style.manuIncluded}>
        <ul>
          <li>
            Tour a medieval castle with sunset Aperitivo followed by catered
            dinner in the castle
          </li>
          <li>Winery tour in Umbria including lunch with owners</li>
          <li>Tour the lovely Umbrian hilltop town of Orvieto</li>
          <li>
            Visit to the beautiful town of Tivoli, its Renaissance gardens with
            lunch next to an encounter Roman Temple
          </li>
          <li>
            3/4 day tour of Rome as a local sees it with rooftop Aperitivo
            dinner including panoramic vistas of Rome
          </li>
          <li>
            Olive grove and mill tour with lesson on distinguishing and grading
            olive oils
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IncludedExcursions;
