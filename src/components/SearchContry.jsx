import React , {useState,useEffect} from 'react'
// import { BsSearch } from 'react-icons/Bs';
import {useDispatch, useSelector} from "react-redux"
import { reset, setSearchCountry } from '../feature/country/countrySlice'

const SearchContry = () => {
  const dispatch = useDispatch()
  const {searchCountry} = useSelector((state)=>state.country)
// const [search,setSearch] = useState()
  const handleSearch = (e)=>{
    dispatch(setSearchCountry(e.target.value))
  }

  // useEffect(() => {
  //   if(searchCountry !== ""){
  //     dispatch(setSearchCountry(searchCountry))
  //   }
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [dispatch, searchCountry]);
  return (
    <div>
      <div className='srchContry'> <input type='text' placeholder='search contry' value={searchCountry}  onChange={handleSearch} /></div>
    </div>
  )
}

export default SearchContry


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { reset, setSearchCountry } from '../feature/country/countrySlice';

// const SearchCountry = () => {
//   const dispatch = useDispatch();
//   const { searchCountry } = useSelector((state) => state.country);

//   const handleSearch = (e) => {
//     dispatch(setSearchCountry(e.target.value));
//   };

//   return (
//     <div>
//       <div className='srchContry'>
//         <input
//           type="text"
//           placeholder="Search country"
//           value={searchCountry}
//           onChange={handleSearch} // Use onChange here
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchCountry;
