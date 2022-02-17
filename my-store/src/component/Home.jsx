import React from 'react'
import img from "../assets/1.jpg"

const Home = () => {
  return (
    <div className='hero'>
      
      <div className="container">
        <div className="card-body">
          <h5 className="card-title display-2 fw-bolder mb-2 text-center text-uppercase">Spring orders are COMING</h5>
          <p className="card-text tk text-center mb-2">10 ACCESSORIES TO UP YOUR FASHION GAME.</p>
          
        </div>
        <div className="card ">
  <img src={img} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title text-end ">Share Your Style</h5>
    
   
  </div>
</div>
<p className="card-text tk text-center mb-6">Browse your favorite brands, find the hottest styles and enjoy free and fast shipping.</p>
      </div>
    </div>
  )
}

export default Home