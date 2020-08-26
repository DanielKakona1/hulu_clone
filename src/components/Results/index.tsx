import React, { ReactElement, useState } from 'react'
import axios from '../../axios'
import './Results.css'
import VideoCard from './VideoCard/'
import requests from '../../request'
interface Props {
  
}

function Results({}: Props): ReactElement {
  const [movies, setMovies] = useState([])

  React.useEffect(()=> {
 const fetchData = async () => {
  const response = await axios.get(requests.fetchActionMovies);
  setMovies(response.data.results)
  return response;

}
fetchData();
 
  }, [])

  return (
    <div className='results'>
      {movies.map((movie) => (
         <VideoCard movie={movie} />
      ))}
     
    </div>
  )
}

export default Results
