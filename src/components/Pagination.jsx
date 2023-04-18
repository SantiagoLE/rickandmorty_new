import React from 'react'


const Pagination = ({ residentsPerPag, currentPage, setCurrentPage, totalResidents }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPag); i++) {
        pageNumbers.push(i)
    }


    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
           
            <button disabled={currentPage === 1 ? false : false} className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`} onClick={onPreviusPage}>Previous</button>
            <ul className="pagination-list">
                {
                    pageNumbers.map(N_Page => (

                        <li key={N_Page}>
                            <a className={`pagination-link ${N_Page === currentPage ? 'is-current' : ''}`}
                            onClick={() => onSpecificPage(N_Page)}
                            >
                                {N_Page}
                            </a>
                        </li>

                    ))
                }

            </ul>
            <button className={`pagination-next ${ currentPage >= pageNumbers.length ? "is-disabled" : ""}`} onClick={onNextPage}>Next</button>

        </nav>
    )
}

export default Pagination
