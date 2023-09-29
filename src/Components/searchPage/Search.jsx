import React from 'react'
import { Link } from 'react-router-dom'
import './search.css'

const Search = ({googleData}) => {             //googleData is Accessed and result is displayed in search result area

  return (
    <>
      <div className='col-md-12 px-5 py-3 '>
          <p className='text-dark'>
            All {googleData?.searchInformation?.formattedTotalResults} results found 
            in {googleData?.searchInformation?.formattedSearchTime} sec
          </p>
          {
            googleData?.items.map(data =>
              <div className='col-md-12'>
                <Link className='link-top' to={data?.formattedUrl}>{data?.displayLink}</Link>
                <img className='menu-img' src='Images/dots.png' alt='menu-dot'></img>
                <Link className='link-top' to={data?.formattedUrl}><h4>{data?.title}</h4></Link>

                <p className='l-paragraph'>{data?.snippet}</p>
                
              </div>
            )
          }
      </div>
    </>
  )
}

export default Search