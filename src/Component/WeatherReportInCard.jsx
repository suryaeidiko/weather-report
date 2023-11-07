import React from "react";
import jsonData from "./data.json";

const WeatherReportInCard = () => {
  return (
    <>
      <h3>Weather Report</h3>
      {jsonData.cities.map((item, index) => (
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{width : '35rem', justifyContent : 'center'}}>
          <div className="col">
            <div className="card" key={index}>
              <h2>{item.name}</h2>
              <div className="card-body">
                <h3 className="card-title">{item.current.temperature}</h3>
                <p></p>
                <div className="card-text" style={{display : "flex", gap : '4rem', fontSize : '20px'}}>
                  <p style={{paddingLeft : '25px'}}>{item.current.humidity}</p>
                  <p>{item.current.wind_speed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeatherReportInCard;
