import React from "react";
import style from "./cooking.module.css";
const OverViewCooking = () => {
  return (
    <div className={style.cooking}>
      <span className={style.overview}> OVERVIEW </span>
      <div  className={style.luxury}>
        <h2>
         
          Luxury Cooking Holiday on Mountains near Rome, Italy{" "}
        </h2>
      </div>

      <div className={style.listing}>
        <span>
          This listing has one of the 10 most popular offers available in the
          website
        </span>
      </div>
      <div className={style.description}>
      <span>
        La Cucina Sabina hosts a luxury culinary and cultural vacation program
        at a private, modern villa. La Cucina Sabina combines food, culture,
        exclusive excursions, and fun into an experience of a lifetime! You will
        enjoy access to places and people you would never find on your own. This
        creates a unique experience that is unforgettable. When you depart after
        a week of the hospitality, you all feel like you got to know the “real
        Italy” and their people and culture.
      </span>
      </div>
    
    </div>
  );
};

export default OverViewCooking;
