import React from 'react'
import useFetch from '../hooks/useFetch'
import "./styles/residentCard.css"


const ResidentCard = ({ url }) => {

    


    const [resident] = useFetch(url)

    return (
        
        <article className='resident'>
            <header className='resident_header'>
                <img className='resident_img' src={resident?.image} alt="" />
                <div className='resident_status'>
                    <div className={`resident_status-circle ${resident?.status}`}></div>
                    <span className='resident_status-label'>{resident?.status}</span>
                </div>
            </header>
            <section className='resident_section'>
                <h3 className='resident_name'>{resident?.name}</h3>
                <hr className='resident_hr'/>
                <ul className='resident_list'>
                    <li className='resident_item'>Specie:<span className='resident_value'>{resident?.species}</span></li>
                    <li className='resident_item'>Origin:<span className='resident_value'>{resident?.origin.name}</span></li>
                    <li className='resident_item'>Eppisodes where appear: <span className='resident_value'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
        
    )
}

export default ResidentCard