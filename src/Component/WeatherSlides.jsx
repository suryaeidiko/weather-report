import React from "react";
import jsonData from "./data.json";
const WeatherSlides = () => {
  return (
    <>
      <h3>WeatherSlides</h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className="carousel-inner"
          style={{ height: "250px", width: "250px" }}
        >
          <div className="carousel-item active">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/11/5a/9c/115a9c09-1a6a-d845-9924-9527feb23172/source/256x256bb.jpg"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://play-lh.googleusercontent.com/hCMmeuES-rh3Qns1_VCXwsoqTSrQL9ibzN6bklCW5m2JpO-AZRh5VkGgeCWTGASvdg=w240-h480"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63069/weather-icon-clipart-md.png"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default WeatherSlides;
