import React, { ReactElement } from 'react'
import './Results.css'
import VideoCard from './VideoCard/'
interface Props {
  
}

function Results({}: Props): ReactElement {
  return (
    <div className='results'>
      <VideoCard  />
    </div>
  )
}

export default Results
