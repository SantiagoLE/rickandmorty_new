import React from 'react'
import "./styles/locationInfo.css"

const LocationInfo = ({ location }) => {
    return (
        <article className='location'>
            <h2 className='location_name'>{location?.results[0].name}</h2>
            <ul className='location_list'>
                <li className='location_item'>Type: <span className='location_value'>{location?.results[0].type}</span></li>
                <li className='location_item'>Dimension: <span className='location_value'>{location?.results[0].dimension}</span></li>
                <li className='location_item'>Population: <span className='location_value'>{location?.results[0].residents.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationInfo