import React, { useState, useEffect } from "react";
import myData from "./data.json";

const WeatherTable = () => {
  
  // const ogData = { myData };
  
  return (
    <>
      <div>Fetch Weather Report Data</div>
      <table className="table" style={{ border: "2px solid black" }}>
        <tr className="table-dark" style={{ color: "black" }}>
          <th>Name</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Wind_Speed</th>
        </tr>
        {
          myData.cities.map((item,index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.current.temperature}</td>
              <td>{item.current.humidity}</td>
              <td>{item.current.wind_speed}</td>
            </tr>
          ))
        }
      </table>
    </>
  );
};

export default WeatherTable;
