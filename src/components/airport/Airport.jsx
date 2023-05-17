import React from "react";
import style from "../../global.module.css";
import styles from "./airport.module.css";
import location from "../../images/location.png";
import right from "../../images/right.png";
import top from "../../images/top.png";

const Airport = () => {
  return (
    <div className={style.features}>
      <div className={style.containerFeatures}>
        <div>
          <img src={location} alt="location" />
          <h3> How to get there</h3>
        </div>
        <img src={top} width={15} height={15} alt="top" />
      </div>

      <h3>Recommended Airports</h3>

      <div className={styles.recommended}>
        <div className={styles.cia}>
          <div>
            <h3> CIA </h3>
          </div>

          <div className={styles.champino}>
            <span> Ciampino–G. B. Pastine International Airport</span>
            <p>34 km </p>
          </div>

          <div className={styles.transfer}>
            <img src={right} alt="right" /> <span> Transfer included</span>
          </div>
        </div>

        <div className={styles.cia}>
          <div>
            <h3> FCO </h3>
          </div>

          <div className={styles.champino}>
            <span> Leonardo da Vinci–Fiumicino Airport</span>
            <p>48 km </p>
          </div>
          <div className={styles.transfer}>
            <img src={right} alt="right" /> <span> Transfer included</span>
          </div>
        </div>
      </div>

      <div className={styles.driving}>
        <div>
          <h3> Driving directions from Fiumicino Airport (FCO)</h3>
          <ul>
            <li>Go towards Rome. </li>
            <li>
              On the road to Rome, take the exit for Firenze and follow the
              signs for Via Salaria (SS 4).
            </li>
            <li>Take the exit for Via Salaria (SS 4) heading for Rieti. </li>
            <li>
              Continue until kilometer 29 of the Via Salaria and turn right
              towards Palombara Sabina.
            </li>
            <li>
              Continue along that road until kilometer three, where you will
              find Resort Gran Paradiso.
            </li>
            <li> Take the private road to Resort Gran Paradiso.</li>
            <li>Villa La Tartaruga is right next to Resort Gran Paradiso. </li>
          </ul>
        </div>

        <div>
          <h3> Driving directions from Rome City center</h3>
          <ul>
            <li>Take Via Salaria (SS 4) heading for Rieti. </li>
            <li>
              Continue until kilometer 29 of the Via Salaria and turn right
              towards Palombara Sabina.
            </li>
            <li>
              Continue along that road until kilometer three, where you will
              find Resort Gran Paradiso.
            </li>
            <li>Take the private road to Resort Gran Paradiso. </li>
            <li> Villa La Tartaruga is right next to Resort Gran Paradiso.</li>
          </ul>
        </div>

        <div>
          <h3> Arrival by airplane</h3>
          <span>
            Please book your flight to arrive at either Leonardo da Vinci -
            Fiumicino Airport (FCO) or Ciampino - G. B. Pastine International
            Airport (CIA). Transfer from and to the airport is included. La
            Cucina Sabina will pick you up from the airport.
          </span>
        </div>

        <div className={styles.arrival}>
          <h3>Arrival by train</h3>
          <span>
            From Leonardo Da Vinci (Fiumicino) airport's railway station, get
            the train to Fara Sabina. Get off at Pianabella di Montelibretti
            station, from there drive along Strada Provinciale Pascolare aka
            Strada Della Neve (SP 35/d) towards Palombara Sabina. Continue until
            KM 3, where you will find “Resort Gran Paradiso”. Take the private
            road for “Resort Gran Paradiso”. La Cucina Sabina is next door
            (sliding brown gate).
          </span>

          <span>
            Take the subway B line (linea B) to Rebibbia and get off at
            Tiburtina. Get the train to Fara Sabina coming from Fiumicino. Get
            off at Pianabella di Montelibretti station, from there drive along
            Strada Provinciale Pascolare aka Strada Della Neve (SP 35/d) towards
            Palombara Sabina. Continue until km 3, where you will find “Resort
            Gran Paradiso”. Take the private road for “Resort Gran Paradiso”. La
            Cucina Sabina is next door (sliding brown gate).
          </span>

          <span>
            Get the train to Fara Sabina coming from Fiumicino. Get off at
            Pianabella di Montelibretti station, from there drive along Strada
            Provinciale Pascolare aka Strada Della Neve (SP 35/d) towards
            Palombara Sabina. Continue until KM 3, where you will find “Resort
            Gran Paradiso”. Take the private road for “Resort Gran Paradiso”. La
            Cucina Sabina is next door (sliding brown gate).
          </span>
        </div>
      </div>

      <div className={styles.airDescription}>
        <div>
          <span>
            Airport: Ciampino–G. B. Pastine International Airport Airport
            transfer included: Ciampino–G. B. Pastine International Airport No
            additional charges. You can request this in the next step
          </span>
        </div>

        <div>
          <span>
            Airport: Leonardo da Vinci–Fiumicino Airport Airport transfer
            included: Leonardo da Vinci–Fiumicino Airport No additional charges.
            You can request this in the next step.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Airport;
