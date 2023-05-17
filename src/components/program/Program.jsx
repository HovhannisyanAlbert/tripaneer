import React from "react";
import programm from "../../images/programm.png";
import top from "../../images/top.png";
import style from "./program.module.css";
const Program = () => {
  return (
    <div className={style.program}>
      <div className={style.header}>
        <div className={style.programImg}>
          <img src={programm} alt="programm" width={20} height={20}  className={style.programImage}/>
          <h3> Program</h3>
        </div>

        <img src={top} alt="top" />
      </div>

      <div className={style.overview}>
        <h3>Overview</h3>

        <span>
          Cooking focuses on authentic plus contemporary Italian cuisine, taught
          by the professional chef who trained in a Michelin three-star
          restaurant, as well as a local Nonna for pizza. La Cucina Sabina
          teaches regional recipes using only the freshest, seasonal and
          authentic farm-to-table ingredients including antipasti (appetizers),
          fresh pasta, sauces, risotto, vegetarian dishes, meats and seafood
          dishes, cooking pizza on our outdoor oven, dolci (desserts), and
          gelato, etc. Not keen on too much cooking? Don’t worry, the lessons
          are only part of what La Cucina Sabina offers and are completely
          optional with plenty of ways to relax and enjoy your time. Transfers
          are provided to and from Rome’s airport and the main train stations to
          the villa in Sabina, minutes from Rome. Check-in is on Sunday
          afternoon with check-out on the following Saturday morning.
        </span>
      </div>

      <h3 className={style.itinerary}>Itinerary </h3>

      <div className={style.week}>
        <div className={style.day}>
          <h3>Sunday, day 1</h3>
          <span>
            On your arrival, La Cucina Sabina provides transfers and pick you up
            at Rome’s main airport, train station, or city hotel. Once you
            arrive at the villa, you check in, get comfortable and relax in the
            spacious villa or well-maintained gardens and grounds. A light
            buffet lunch and Prosecco are served with the afternoon left open to
            relax and enjoy your fellow guests or enjoy a refreshing swim or
            sauna. In the evening, the delicious four-course welcome dinner with
            professional waiter service is served on the sunset terrace (weather
            permitting) overlooking the olive groves and beautiful hills and
            mountains. You will discuss the exciting week ahead.
          </span>
        </div>

        <div className={style.day}>
          <h3>Monday, day 2</h3>
          <span>
            You begin each morning with a full buffet breakfast in the formal
            dining room or under one of the covered outdoor terraces overlooking
            the pool, olive trees hillsides, and mountains. The first cooking
            lesson begins in the mid-morning with the professional chef. Because
            La Cucina Sabina is hands-on, you will be preparing your lunch that
            you will enjoy. In the late afternoon, you head to Castello Savelli,
            a medieval castle in the hilltop town of Palombara Sabina, a short
            drive from the villa.
          </span>
          <span>
            You will enjoy a private tour of the castle and museum with ancient
            statues and then a sunset prosecco reception overlooking the Sabine
            Hills and valley. This is a rare opportunity to visit the castle and
            museum which is not normally open to the public and experience the
            same stunning views of Sabina that Margaret Thatcher and her husband
            saw on their many visits to their "secret getaway". A four-course
            private dinner is a few steps down the cobblestone path to the old
            Tavern Ristorante.
          </span>
        </div>

        <div className={style.day}>
          <h3>Tuesday, day 3</h3>
          <span>
            After a buffet breakfast, you visit the ancient hilltop town of
            Tivoli for a guided tour of the beautiful gardens of Villa d'Este, a
            UNESCO World Heritage Site, where you will be amazed at the
            Renaissance villa, gardens, and fountains. The Renaissance gardens
            stood as a model for others throughout Europe to follow. Along the
            way, you will visit the morning farmers market as the locals do.
            After lunch at a historic restaurant in Tivoli, overlooking an
            ancient Roman temple, you return to La Cucina Sabina for your
            afternoon lesson with the professional chef, followed by dinner on
            the sunset terrace overlooking the olive groves and Monte Serrate.
            (weather permitting)
          </span>
        </div>

        <div className={style.day}>
          <h3>Wednesday, day 4</h3>
          <span>
            Following your buffet breakfast, you depart for “Discover the
            Secrets of Ancient Rome” tour. In a special, guided tour of the
            city, you visit places not normally seen by tourists, making your
            visit very special and unique. Experience the Rome that the locals
            know, with a rare combination of art, food, culture, and history in
            a very full day experiencing "la dolce vita”. Both lunch and dinner
            will be enjoyed in Rome. During the afternoon, the tour continues or
            optional free time is available for shopping or independent touring.
            A four-course dinner is enjoyed on a private rooftop apartment
            hosted by local Italians and overlooking the beautiful skyline with
            its magical sunset.
          </span>
        </div>

        <div className={style.day}>
          <h3>Thursday, day 5</h3>
          <span>
            After breakfast, you enjoy a scenic drive through the foothills of
            northern Lazio toward Umbria for a winery visit and a tasting at the
            family-owned Mazziotti winery overlooking beautiful Lake Bolsena,
            followed by lunch with the winery owners in their private tasting
            room. To complement the winery, you stroll through the wonderful
            hilltop Umbrian town of Orvieto, with its dramatic vistas, medieval
            walls, Etruscan ruins, shops and cathedral. This town dates back all
            the way back to ancient Etruscan times. In the evening, you have
            your pizza lesson and dinner at the villa where you will learn how
            to make pizza using the authentic outdoor wood burning oven.
          </span>
        </div>

        <div className={style.day}>
          <h3>Friday, day 6</h3>
          <span>
            Begin the day by enjoying a delicious homemade breakfast. Since the
            estate produces its own DOP extra virgin olive oil, you will visit
            the olive grove and local mill. As part of the visit, you learn what
            the Romans knew about growing olives 2000 years ago as well as the
            modern Italian methods of producing some of the best olive oil in
            the world. You return to the villa and enjoy a tasting of olive oils
            and lesson on understanding what makes an olive oil great. After
            some R & R, you begin your fourth lesson with your chef. You use all
            your skills learned during the week for your big grand finale
            five-course dinner, cooking everything from antipasto to dolce!
          </span>
        </div>

        <div className={style.day}>
          <h3>Saturday, day 7</h3>
          <span>
            After a light breakfast and goodbyes, transfers are provided to
            Rome's airports, hotels, or train station for return trips or
            extended travel in Italy.
          </span>

          <span>
            Note: During your stay, La Cucina Sabina is happy to make available
            one of Rome’s fine tailors to make you custom clothing that’s both
            stylish and great fitting.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Program;
