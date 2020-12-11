import React, { useState } from "react";
import "./styles.css";

var foodRestaurant = {
  Bikaner: [
    "Sattvic Multi Cuisin Restaurant",
    "SkyBytes Rooftop Restaurant",
    "Narendra Bhawan Bikaner"
  ],

  Delhi: [
    "Indian Accent",
    "Tamra Restaurant",
    "Baluchi - A Pan Indian Restaurant"
  ],

  Jaipur: ["Suvarna Mahal", "24/7 Restaurant", "Zolocrust"],

  Jodhpur: [
    "Indique Restaurant",
    "Kesar Heritage Restaurant Jodhpur",
    "Janta Sweet Home"
  ]
};

var getRes = Object.keys(foodRestaurant);

export default function App() {
  var [getUser, getResult] = useState("Bikaner");
  function userClick(item) {
    var getting = item;
    getResult(getting);
  }
  return (
    <div className="App">
      <h1>Welcome Chowhound</h1>
      <h2>
        Want to know about
        <span style={{ color: "red" }}> Famous Restaurant</span>?
      </h2>
      <p>Choose from the categories below to know:-</p>

      {getRes.map((item) => {
        return (
          <button
            key={item}
            onClick={() => userClick(item)}
            style={{
              borderRadius: "0.5rem",
              padding: "0.3rem",
              margin: "1rem",
              cursor: "pointer"
            }}
          >
            {item}
          </button>
        );
      })}
      <hr />
      <div style={{ textAlign: "left" }}>
        <h3 style={{ textAlign: "center" }}>Famous Restaurant are:-</h3>
        {foodRestaurant[getUser].map((item) => {
          return (
            <li
              key={item}
              style={{
                border: "1px solid gray",
                width: "20%",
                listStyleType: "none",
                margin: "auto ",
                marginBottom: "1rem",
                padding: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}
