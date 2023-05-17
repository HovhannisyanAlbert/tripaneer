import React from "react";
import thing from "../../images/thing.png";
import top from "../../images/top.png";
import style from "../../global.module.css";
const Things = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={thing} alt="thing" />
          <h3> Things to do (optional)</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>
      <span>
        While La Cucina Sabina has put together a full schedule, there's plenty
        of time to enjoy each other’s company, have an optional massage, stroll
        the gardens, and olive or cherry groves, swim in the Olympic sized pool,
        enjoy the sauna, or just sip a glass of wine poolside or on one of the
        many terraces. While you are not fast paced, La Cucina Sabina does offer
        a full agenda.
      </span>
    </div>
  );
};

export default Things;
