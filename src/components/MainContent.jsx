import React, { useState } from 'react'
import LocationInfo from './LocationInfo'
import ResidentCard from './ResidentCard'
import "./styles/mainContent.css"
import Pagination from './Pagination'




const MainContent = ({ location}) => {

    const [residentsPerPag, setResidentsPerPag] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const totalResidents = location?.results[0].residents.length

    const lastIndex = currentPage * residentsPerPag 
    const firstIndex = lastIndex - residentsPerPag


  return (
    <>

    
     <LocationInfo location={location} />

     <Pagination 
              residentsPerPag={residentsPerPag}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalResidents={totalResidents}
              
              />
      <div className='resident_container'>
        {
          location?.results[0].residents.map(residentUrl => (

            <ResidentCard
              key={residentUrl}
              url={residentUrl}
            />
          )).slice(firstIndex , lastIndex)
        }
             
      </div>
      <Pagination 
              residentsPerPag={residentsPerPag}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalResidents={totalResidents}
              
              />
    </>
  )
}

export default MainContent