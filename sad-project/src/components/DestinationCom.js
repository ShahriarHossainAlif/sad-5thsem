import React from 'react'
import DestImg from "../assets/BG-img/destination-page-bg.png"
import "./DestinationCom.css"
const DestinationCom = () => {
  return (
    <div>
      <main>
        <div class="hero-section-container">
            <div class="hero-section">
                <h2 id="page-mini-title">Explore Our</h2>
                <h1 id="page-big-title">Destination to Visit</h1>
                <div class="underline"></div>
                <div class="budget-packages-description">
                    <p>You can see the top destination we cover every year. We are exploring the top tourist spots every single year with our valuable customers and the peoples or community who have a large interest to visit and see the world with their own eyes and experience a lot of new thing.</p>
                </div>
            </div>
            <div class="hero-section-img">
                <img width="500px" src= {DestImg} alt=""/>
            </div>
        </div>
        <div class="budget-packages-container">
            <div class="our-budget-packages">
                Our Destination
            </div>
        </div>
        <div class="destination-grid">
            <div class="destination-container">
                <div class="des">
                    <div class="destinations destination1"></div>
                    <h3>Cox Bazar</h3>
                </div>
                <div class="des">
                    <div class="destinations destination2"></div>
                    <h3>Rangamati</h3>
                </div>
                <div class="des">
                    <div class="destinations destination3"></div>
                    <h3>Shitakunda</h3>
                </div>
                <div class="des">
                    <div class="destinations destination4"></div>
                    <h3>Tanguar Hawar</h3>
                </div>
                <div class="des">
                    <div class="destinations destination5"></div>
                    <h3>Saint Marteen</h3>
                </div>
                <div class="des">
                    <div class="destinations destination6"></div>
                    <h3>Inani Beach</h3>
                </div>
                <div class="des">
                    <div class="destinations destination7"></div>
                    <h3>Lalbah Fort</h3>
                </div>
                <div class="des">
                    <div class="destinations destination8"></div>
                    <h3>Kaptai</h3>
                </div>
                <div class="des">
                    <div class="destinations destination9"></div>
                    <h3>Ratargul</h3>
                </div>
                <div class="des">
                    <div class="destinations destination10"></div>
                    <h3>Sajek</h3>
                </div>
                <div class="des">
                    <div class="destinations destination11"></div>
                    <h3>Shundar Ban</h3>
                </div>
                <div class="des">
                    <div class="destinations destination12"></div>
                    <h3>Himchori</h3>
                </div>
                
            </div>
        </div>
    </main>
    </div>
  )
}

export default DestinationCom
