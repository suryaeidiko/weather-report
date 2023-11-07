import React, { useState, useEffect } from "react";
// import Weather from "./Weather";

const SearchLocation = ({value,handlevalue,handlesubmit}) => {
  const [indata, setIndata] = useState("");

  return (
    <>
      <form onSubmit={handlesubmit} className="row g-3">
        <div className="col-auto">
          <input
          value={value}
            type="text"
            className="form-control"
            style={{ borderRadius: "20px", paddingBottom: "12px" }}
            placeholder="search location"
            
            onChange={handlevalue}
          />
        </div>
        <div className="col-auto">
          <button
          type="submit"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchLocation;
