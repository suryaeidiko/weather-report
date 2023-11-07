import { useState } from "react";
import "./App.css";
import Time from "./Component/time";
// import WeatherSlides from "./Component/WeatherSlides";
// import WeatherReportInCard from "./Component/WeatherReportInCard";
import Weather from "./Component/Weather";
// import SearchLocation from "./Component/SearchLocation";
// import WeatherTable from "./Component/WeatherTable";

function App() {

  return (
    <>
      <Time />
      <Weather />
      {/* <SearchLocation /> */}
    </>
  );
}

export default App;
