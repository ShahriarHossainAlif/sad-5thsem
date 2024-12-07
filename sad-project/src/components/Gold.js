import React from 'react'
import "./Budget.css"
import GoldImg from "../assets/BG-img/gold-package-bg.png"
import { Link } from 'react-router-dom'
const Gold = () => {
  return (
    <div>
       <main>
        <div class="hero-section-container">
            <div class="hero-section">
                <h2 id="page-mini-title">Explore Our</h2>
                <h1 id="page-big-title">Gold Packages</h1>
                <div class="underline"></div>
                <div class="budget-packages-description">
                    <p>Our gold packages are mostly purchased by family. Small family, medium family and joint family are the most common customer of this packages. This packages are organized with best deal for family members.</p>
                </div>
            </div>
            <div class="hero-section-img">
                <img width="500px" src={GoldImg} alt="Gold-Pack"/>
            </div>
        </div>
        <div class="budget-packages-container">
            <div class="our-budget-packages">
                Our Gold Packages
            </div>
        </div>
        <div class="budget-pack-detail-container">
            <div class="budget-p1">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">2 Days 1 Night</span><br/> <span> (STARTER GOLD)</span></h3>
                    <p class="details">Break-Fast (Per-4)</p>
                    <p class="details">Heavy-Lunch (Per-4)</p>
                    <p class="details">Exclusive-Dinner (Per-4)</p>
                    <p class="details">1 Room (2 Double Bed)</p>
                    <div class="pack-buttons">
                    <button  class="price-pack">2499 BDT</button>
                    <button><Link to ='/user'>Buy</Link></button>  
                    </div>
                </div>
                <h3 class="title-pack">Gold Pack 1</h3>
            </div>
            <div class="budget-p2">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">3 Days 2 Night</span><br/> (MEDIUM GOLD)</h3>
                    <p class="details">Custom-Break-Fast (Per-6)</p>
                    <p class="details">Custom-Lunch (Per-6)</p>
                    <p class="details">Custom-Dinner (Per-6)</p>
                    <p class="details">2 Room (2 Double Bed)</p>
                    <div class="pack-buttons">
                    <button  class="price-pack">3299 BDT</button>
                    <button><Link to ='/user'>Buy</Link></button> 
                    </div>
                </div>
                <h3 class="title-pack">Gold Pack 2</h3>
            </div>
            <div class="budget-p3">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">4 Days 3 Night</span><br/> <span> (LARGE GOLD)</span></h3>
                    <p class="details">Custom-Break-Fast (Per-10)</p>
                    <p class="details">Custom-Lunch (Per-10)</p>
                    <p class="details">Custom-Dinner (Per-10)</p>
                    <p class="details">3 Room (2 Double Bed)</p>
                    <div class="pack-buttons">
                    <button  class="price-pack">8999 BDT</button>
                    <button><Link to ='/user'>Buy</Link></button> 
                    </div>
                </div>
                <h3 class="title-pack">Gold Pack 3</h3>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Gold
