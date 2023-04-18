import { useRef, useState, useEffect } from 'react';
import './App.css'
import getRandomLocation from './utils/getRandomLocation';
import axios from 'axios';
import FormAutocomplete from './components/FormAutocomplete';
import MainContent from './components/MainContent';
import allLocations from './utils/allLocations.json'
import Pagination from './components/Pagination';


let _allLocations = []


function App() {

  const [location, setLocation] = useState()
  const [error, setError] = useState(false)
  const [pageUrlLocations, setPageUrlLocations] = useState(1)
  const [locationSelectInList, setLocationSelectInList] = useState(getRandomLocation(allLocations))


 


  useEffect(() => {

    const urlLocations = `https://rickandmortyapi.com/api/location?page=${pageUrlLocations}`
    axios.get(urlLocations)

      .then(res => {
        res.data.results.forEach(ele => _allLocations.push(ele.name))
        if (pageUrlLocations < 7) {
          setPageUrlLocations(pageUrlLocations + 1)
        }
      })
      .catch(err => console.log(err))

  }, [pageUrlLocations])

  

    
  useEffect(() => {
     if (locationSelectInList) 
     
     {
      const url = `https://rickandmortyapi.com/api/location/?name=${locationSelectInList}`
      axios.get(url)
        .then(res => {
          setLocation(res.data)
    
          setError(false)
        })

        .catch(err => {
          console.log(err)
          setError(true)
        })


     }


  }, [locationSelectInList])











  const locationSelect = (_location) => {
    setLocationSelectInList(_location)
  }
  return (

    <div className="App">
      <div className='app_title' >

      </div>

      <FormAutocomplete
        _allLocations={_allLocations}
        locationSelect={locationSelect}
      />
      {
        error
          ? <h2 className='app_error'>✖️ The location input don't exist 🤔</h2>
          : <MainContent
            location={location}
            locationSelectInList={locationSelectInList}
          />
      }

    </div>
  )
}

export default App
