import React, { ReactElement } from 'react'
import './VideoCard.css'

interface Props {
 movie?:Object 
}

function VideoCard({movie}: Props): ReactElement {
  return (
    <div className='videocard'>
      <img 
      src={require('../../../assets/hulu.png')}
      alt='movie'
      />
      <p>Movie overview</p>
      <h2>Movie title</h2>
      <p>Likes</p>
    </div>
  )
}

export default VideoCard
