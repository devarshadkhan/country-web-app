import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset , setRegion  } from "../feature/country/countrySlice.js";
const ContrybyRegion = () => {
  const dispatch = useDispatch()
  const region = ["Africa","Americas","Asia","Europe","Oceania"]
  const[filter,setFilter]= useState()

  // useEffect(() => {
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, []);
  return (
    <div>
      <div className="ctry">
        <select >
          <option value="" defaultValue>
            Filter by Region
          </option>
          {region.map((e)=>{
            return(
              <>
              <option value={e} onClick={()=>setFilter(e)}>{e}</option>
              </>
            )
          })}
          
        </select>
      </div>
    </div>
  );
};

export default ContrybyRegion;
