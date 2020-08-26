import React, { ReactElement } from 'react'
import './Nav.css'
interface Props {
  
}

function Nav({}: Props): ReactElement {
  return (
    <div className='nav'>
      <h2>Trending</h2>
      <h2>Top Rated</h2>
      <h2>Action</h2>
      <h2>Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Mystery</h2>
      <h2>Sci-fi</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
      <h2>Movie</h2>
    </div>
  )
}

export default Nav
