import  React from 'react'
import '../nft.css'
import stars from '../images/stars.png'
import nft1 from '../images/Frame 151.png'

function Nft({src}) {

    return (
       <div className='container'>
          <div className='image-container'>
                <img src={src} alt='nft'/>
          </div>

          <div className='aboutnft'>
             <div className='aboutleft'>
                <p>Desert King</p>
                <p>2345km away</p>
                <img src={stars} alt='rating'/>
             </div>

             <div className='aboutright'>
                <p ><b>1MBT per night</b></p>
                <p>available for 2weeks stay</p>
             </div>
          </div>
       </div>
    )
}

export default Nft;