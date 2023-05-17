import React from "react";
import document from "../../images/document.png"
import message from "../../images/message.png"
import user from "../../images/user.png"
import car from "../../images/car.png"
import style from "./high.module.css";
const Highlights = () => {
  return (
    <>
    <div className={style.high}>
      <h3> Highlights </h3>

      <div>
        <ul>
          <li> Authentic Italian cooking lessons</li>
          <li>Winery visit and a tasting overlooking beautiful Lake Bolsena</li>
          <li>
           
            Olive oils tasting and lesson on understanding what makes an olive
            oil great
          </li>
          <li>A guided tour of the beautiful gardens of Villa d'Este</li>
          <li>Visit to places not normally seen by tourists</li>
          <li>Airport, hotel, or train station transfers</li>
          <li>6 nights accommodation</li>
          <li>3 daily tasty meals</li>
        </ul>
      </div>

      <div>
        <h3> Skill level </h3>
        <ul>
            <li>Beginner</li>
            <li>Intermediate</li>
        </ul>
      </div>
    </div>
     
     <div className={style.border}> </div>

     <div className={style.highBox}>
      <img src={document} alt="document"/>
       <span>
         6 days with instruction in
           <strong className={style.english}> English </strong>
       </span>
     </div>
 
     <div  className={style.highBox}>
     <img src={message} alt="message"/>
       <span> The organizer also speaks: French, Italian</span>
     </div>

     <div className={style.highBox}>
       <img src={user} alt="user"/> 
       <span> Group size: Maximum of 20 participants</span>
     </div>

     <div className={style.highBox}>
     <img src={car} alt="car"/> 
       <span>
         Airport transfer included: Ciampino–G. B. Pastine International
         Airport
       </span>
     </div>

     <div className={style.highBox}>
     <img src={car} alt="car"/> 
       <span>
         Airport transfer included: Leonardo da Vinci–Fiumicino Airport
       </span>
     </div> 
     

   
   </>
  );
};

export default Highlights;







