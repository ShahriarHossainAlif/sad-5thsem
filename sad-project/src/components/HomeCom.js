import React from 'react'
import "./HomeCom.css"
import HeroImg from '../assets/Home-page-photo/main-hero-img.png'
const HomeCom = () => {
  return (
    <div>
             <main>
        <div class="hero-section-container">
            <div class="hero-section">
                <h2 id="page-mini-title">Explore The</h2>
                <h1 id="page-big-title">World With Us</h1>
                <div class="underline"></div>
                <div class="about-us-button">About Us</div>
                <div class="about-us-description">
                    <p>We are travel share 360 company who provide most reasonable tour packages with a compact prices and high priority to our customers. We provide customize packages to our customer as they are our main priority</p>
                </div>
            </div>
            <div class="hero-section-img">
                <img width="400px" src={HeroImg} alt="Hero-img"/>
            </div>
        </div>
        <div class="most-visited-container">
            <div class="most-visited-location">
                Most Visited Location
            </div>
        </div>
        <div class="location-containers">
            <div class="loc loc1-container">
                <div class="locations location1"></div> <p>Cox Bazar</p>
            </div>
            <div class="loc loc2-container">
                <div class="locations location2"></div> <p>Rangamati</p>
            </div>
            <div class="loc loc3-container">
                <div class="locations location3"></div> <p>Shitakunda</p>
            </div>
            <div class="loc loc4-container">
                <div class="locations location4"></div> <p>Tanguar Hawar</p>
            </div>
            
        </div>
    </main>
    </div>
  )
}

export default HomeCom
