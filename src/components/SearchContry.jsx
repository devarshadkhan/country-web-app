import React from 'react'
import { BsSearch } from 'react-icons/Bs';

const SearchContry = () => {
  return (
    <div>
      <div className='srchContry'><BsSearch /> <input type='text' placeholder='search contry' /></div>
    </div>
  )
}

export default SearchContry