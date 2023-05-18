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
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d147063.94548419578!2d44.515815853279065!3d40.18325115621294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1684346688630!5m2!1sru!2sam" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Location;
