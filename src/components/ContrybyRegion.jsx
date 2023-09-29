// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { reset , setRegion  } from "../feature/country/countrySlice.js";
// const ContrybyRegion = () => {
//   const dispatch = useDispatch()
//   const region = ["Africa","Americas","Asia","Europe","Oceania"]
//   const[filter,setFilter]= useState("")
//   console.log("sdfhuwfhuwhuw",filter);
//   useEffect(() => {
//     if(filter !== ""){
//       dispatch(setRegion(filter))
//     }

//     return ()=>{
//       dispatch(reset())
//     }
//   }, [dispatch, filter]);
//   return (
//     <div>
//       <div className="ctry">
//         <select onClick={()=>setFilter()}>
//           <option value="" defaultValue>
//             Filter by Region
//           </option>
//           {region.map((e)=>{
//             return(
//               <>
//               <option value={e} >{e}</option>
//               </>
//             )
//           })}
          
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ContrybyRegion;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountryAll, reset, setRegion } from "../feature/country/countrySlice.js";

const ContrybyRegion = () => {
  const dispatch = useDispatch();
  const regions = [ "africa", "americas", "asia", "europe", "oceania"]; // Use lowercase values
  const [filter, setFilter] = useState("");

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value.toLowerCase(); // Convert to lowercase
    setFilter(selectedRegion); // Update the filter state when a region is selected
  };

  useEffect(() => {
    if (filter ) {
      dispatch(setRegion(filter)); // Dispatch the lowercase region
    }

    // Cleanup function to reset the region when the component unmounts
    return () => {
      dispatch(reset());
      dispatch(fetchCountryAll())
    };
  }, [dispatch, filter]);

  return (
    <div>
      <div className="ctry">
        <select onChange={handleRegionChange} value={filter}>
          <option value="" defaultValue >
            Filter by Region
          </option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContrybyRegion;
