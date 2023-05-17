import React from "react";
import car from "../../images/car1.png"
import top from "../../images/top.png"
import sauna from "../../images/sauna.png"
import garden from "../../images/gardening.png"
import wifi from "../../images/wifi.png"
import swimming from "../../images/swimming.png"
import kitchen from "../../images/kitchen.png"
import check from "../../images/check.png"
import style from "./accom.module.css";
const Accommodation = () => {
  return (
    <>
    <div className={style.accom}>
      <div className={style.accomButton}>
        <button> <img src={car} alt="car" /> Accommodation</button>
        <img src={top} alt="top" />
      </div>

      <h3> Facilities </h3>

      <div className={style.container}>
        <div className={style.internet}>
          <div className={style.accomMenu}>
           <img src={sauna} alt="sauna" />
            <span>Sauna </span>
          </div>
          <div className={style.accomMenu}>
          <img src={garden} alt="garden" />
            <span>Garden </span>
          </div>
          <div className={style.accomMenu}>
          <img src={wifi} alt="wifi" />
            <span> Free Wi-Fi </span>
          </div>
        </div>

        <div className={style.internet}>
          <div className={style.accomMenu}>
          <img src={swimming} alt="swimming" />
            <span>Swimming pool (outdoor) </span>
          </div>
          <div className={style.accomMenu}>
          <img src={kitchen} alt="kitchen" />
            <span>Kitchen </span>
          </div>
          <div className={style.accomMenu}>
          <img src={check} alt="check" />
            <span> Patio </span>
          </div>
        </div>
      </div>

      <div className={style.description}>
        <span>
          The villa is a part of La Cucina Sabina. It is best described as a
          luxurious country home which sits on a 150-acre estate surrounded by
          olive and cherry orchards. Located in the tranquil Sabine hills, at
          the foothills of the Lucretelli Mountain range, La Cucina Sabina is
          near enough to Rome to enjoy rich culture, yet far enough to be an
          oasis of peacefulness and beauty. An inspiring work of architecture,
          the three-story villa combines the clean lines of Frank Lloyd Wright
          with classic Italian architecture, bringing in amazing vistas through
          the floor to ceiling glass, of the beautiful surrounding mountains,
          gardens, and pool.
        </span>

        <span>
          The villa underwent a major renovation and refurbishment in 2015. It
          boasts a state of the art demonstration kitchen, impressive art
          collection, baby grand piano, salt water pool, sauna, rose garden,
          outdoor pizza oven, eight bedrooms (all with en-suite bathrooms), nine
          bathrooms, tennis court, and nighttime vistas of lighted hilltop
          castles. This resort provides a guest washer/dryer, free high speed
          WiFi and hairdryers in each room.
        </span>

        <span>
          Each bedroom has custom made American king-sized beds that also can
          divide into twins, large closets, TVs, free Wi-Fi, and premium olive
          oil based toiletries. Two upstairs suites include balconies with
          sweeping vistas, large soaking tubs, and separate showers. All
          upstairs rooms provide views of mountains, hills, and countryside.
          Ground floor rooms have direct garden access and a shared patio. The
          villa is near a local train that runs directly into Rome throughout
          the day.
        </span>
      </div>
      <div className={style.view}>
      <div className={style.mountain}>
        <h3>Garden view room</h3>
        <span>
          Garden view room is a ground floor bedroom with a private bathroom and
          shared external patio.
        </span>
      </div>

      <div className={style.mountain}>
        <h3>Mountain view room</h3>
        <span>
          Mountain view room is an upstairs bedroom with private bath. It has
          views of hills, mountains, olive groves, and lighted hilltop castles
          at night.
        </span>
      </div>

      <div className={style.mountain}>
        <h3>Mountain view suite</h3>
        <span>
          Mountain view suite is an upstairs suite with balcony and extra large
          private bath with separate shower and soaking tub. It has panoramic
          views of hills, mountains, countryside, and sunrise / sunset.
        </span>
      </div>
    </div>
    </div>

    </>
  );
};

export default Accommodation;
