import React from "react";
import style from "../../global.module.css";
import food from "../../images/food.png";
import top from "../../images/top.png";
import styles from "./food.module.css";
const Food = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={food} alt="food" />
          <h3> Food</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>
      <span>
        You will be served breakfasts, lunches, dinners. An honor bar is
        available for cocktails.
      </span>

      <div>
        <div>
          <h3> The following meals are included:</h3>
          <ul>
            <li>Breakfast</li>
            <li> Lunch</li>
            <li> Dinner</li>
            <li> Drinks</li>
          </ul>
        </div>

        <div>
          <h3>
            {" "}
            The following dietary requirement(s) are served and/or catered for:
          </h3>

          <ul>
            <li> Vegetarian</li>
            <li> Gluten Free</li>
            <li> Organic</li>
            <li> Regular (typically includes meat and fish)</li>
            <li> Lactose Free</li>
            <li> Other dietary requirements on request</li>
          </ul>
        </div>
      </div>

      <div className={styles.special}>
        <span>
       
          If you have special dietary requirements it's a good idea to
          communicate it to the organiser when making a reservation
        </span>
      </div>
    </div>
  );
};

export default Food;
