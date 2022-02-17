import React from 'react'
import img from "../assets/v0R8aJNxhr8HEg65.jpg"

const Home = () => {
  return (
    <div className='hero'>
      
      <div class="container">
        <div class="card-body">
          <h5 class="card-title display-2 fw-bolder mb-2 text-center text-uppercase">Spring orders are COMING</h5>
          <p class="card-text tk text-center mb-2">10 ACCESSORIES TO UP YOUR FASHION GAME.</p>
          
        </div>
        <div class="card ">
  <img src={img} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title text-end ">Share Your Style</h5>
    
   
  </div>
</div>
<p class="card-text tk text-center mb-6">Browse your favorite brands, find the hottest styles and enjoy free and fast shipping.</p>
      </div>
    </div>
  )
}

export default Home