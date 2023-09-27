import React from 'react';
// import { AiOutlineSearch } from 'react-icons/ai'; // Notice the correct import statement
import AiOutlineSearch  from "@react-icons/all-files/Ai/AiOutlineSearch";

const SearchCountry = () => {
  return (
    <div>
      <div className='srchCountry'><AiOutlineSearch /> <input type='text' placeholder='search country' /></div>
    </div>
  );
};

export default SearchCountry;
