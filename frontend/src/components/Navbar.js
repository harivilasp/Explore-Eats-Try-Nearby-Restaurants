import React from 'react'
import ExploreEats_flat from '../assets/ExploreEats_flat.png'
function Navbar() {
  return (
    <div className="navbar">
      <div style={{color:'red'}}>
        <div className='leftSide'>
            <img style={{width: '50', height: '50', float: 'left'}} src={ExploreEats_flat}/>
        </div>
        <div className='rightSide'></div>
        </div>
    </div>
  )
}

export default Navbar
