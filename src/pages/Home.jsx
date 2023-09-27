import React from 'react'
import SearchContry from '../components/SearchContry'
import ContrybyRegion from '../components/ContrybyRegion'
import ContryCard from '../components/ContryCard'

const Home = () => {
  return (
    <>
      <div className='home_wrp'>
        <div className='home_main'>
       <SearchContry />
       <ContrybyRegion />
        </div>
       <ContryCard />
      </div>
    </>
  )
}

export default Home