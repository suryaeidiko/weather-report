import React, { useState, useEffect } from "react";
import SearchLocation from "./SearchLocation";
import jsonData from "./data.json";

const Weather = () => {
  const [temperator, setTemporator] = useState("");
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [samp, setSamp] = useState("");
  const [show, setshow] = useState("");
  const [name, setName] = useState("");

  const handlechange = (e) => {
    setSamp(e.target.value);
    setshow(e.target.value);
    searchdata();
  };

  const handlesubmit1 = (e) => {
    e.preventDefault();

    setSamp("");
  };
  console.log("out - " + show);
  const searchdata = () => {
    jsonData.cities.map((item) => {
      console.log("---- " + show);
      setName(item.name);
      console.log("name : " + item.name);
      if (name === name) {
        console.log("in - " + show);
        setTemporator(item.current.temperature);
        setHumidity(item.current.humidity);
        setWind(item.current.wind_speed);
      }
    });
  };

  return (
    <>
      <div
        className="card border-success mb-3"
        style={{ maxWidth: "24rem", backgroundColor: "lightblue" }}
      >
        <h4 style={{ color: "lightcoral" }}>Weather condition</h4>
        <div className="card-header bg-transparent border-success">
          <SearchLocation
            handlesubmit={handlesubmit1}
            value={samp}
            handlevalue={handlechange}
          />
        </div>
        <div style={{ paddingTop: "20px", fontSize: "40px" }}>{show}</div>
        <div className="card-body text-success">
          <i
            className="material-icons"
            style={{ fontSize: "80px", color: "orange" }}
          >
            wb_sunny
          </i>
          <i
            className="material-icons"
            style={{ fontSize: "80px", color: "skyblue" }}
          >
            wb_cloudy
          </i>
        </div>
        <p style={{ fontSize: "50px" }}>{temperator}</p>
        <div
          className="card-footer bg-transparent border-success"
          style={{ display: "flex", fontSize: "40px", gap: "7rem" }}
        >
          <p style={{ paddingLeft: "20px" }}>🌫️</p>
          <p>💨</p>
        </div>
        <div style={{ display: "flex", fontSize: "15px", gap: "7rem" }}>
          <p style={{ paddingLeft: "20px" }}>{humidity} humidity</p>
          <p>{wind} km/h wind Speed</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
