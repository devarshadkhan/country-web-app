import React from 'react'
// import { AiOutlineSearch } from 'react-icons/Ai';
import * as AiIcons from 'react-icons/Ai';

const SearchContry = () => {
  return (
    <div>
      <div className='srchContry'><AiIcons.AiOutlineSearch /> <input type='text' placeholder='search contry' /></div>
    </div>
  )
}

export default SearchContry