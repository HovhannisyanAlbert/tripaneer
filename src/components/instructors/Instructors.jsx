import React from "react";
import healthcare from "../../images/healthcare.png";
import top from "../../images/top.png";
import meet from "../../images/meet.jpg";
import style from "./instructors.module.css";
const Instructors = () => {
  return (
    <div className={style.instructor}>
      <div className={style.healthContainer}>
        <div>
          <img src={healthcare} alt="healthcare" />
          <span> Included excursions</span>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>

      <div className={style.barbara}>
        <div className={style.meet}>
       
          <img src={meet} alt="meet" />
        </div>
        <div>
          <h4> Barbara Borasio</h4>
          <span>
            
            Barbara is young and dynamic, a true volcano of ideas. She is
            already an accomplished creative culinary talent. After a long
            period of practice, she has become a teacher in the most famous
            Italian cooking school, Il Gambero Rosso, and now collaborates with
            La Cucina Sabina offering the guests cooking lessons that are always
            creative original and fun.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
