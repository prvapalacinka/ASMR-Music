import React from 'react'
import './slider.css'
import '../../assets/images/album1.jpeg'
import '../../assets/images/album2.jpeg'

export default function Slider() {
  return (
 <>
 <div className="slider-container">
      <div className="slider">
        <div className="album-wrapper">
          <div className="album">
            <img src='album1.jpeg' alt="Album 1" />
            <div className="text-container">
              <div className="title">Album 1 Title</div>
              <div className="artist">Album 1 Artist</div>
            </div>
          </div>
          <div className="album">
            <img src='album2.jpeg' alt="Album 2" />
            <div className="text-container">
              <div className="title">Album 2 Title</div>
              <div className="artist">Album 2 Artist</div>
            </div>
          </div>
          {/* Add more album squares here */}
        </div>
      </div>
    </div>

</>
  )
}
