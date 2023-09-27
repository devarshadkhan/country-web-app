import React from "react";

const ContrybyRegion = () => {
  return (
    <div>
      <div className="ctry">
        <select name="cars" id="cars">
          <option value="volvo" defaultValue>
            Filter by Region
          </option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default ContrybyRegion;
