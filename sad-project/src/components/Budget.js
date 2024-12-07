import React from 'react'
import "./Budget.css"
import BudgetPack from "../assets/BG-img/budget-package-bg.png"
import { Link } from 'react-router-dom'
const Budget = () => {
  return (
    <div>
       <main>
        <div class="hero-section-container">
            <div class="hero-section">
                <h2 id="page-mini-title">Explore Our</h2>
                <h1 id="page-big-title">Budget Packages</h1>
                <div class="underline"></div>
                <div class="budget-packages-description">
                    <p>Our budget packages are for those tour lover who are currently want to make a tour with group or community. Who want to explore the beauty with a reasonable price and best deals. Budget package consumers are mostly students and group of friends</p>
                </div>
            </div>
            <div class="hero-section-img">
                <img width="500px" src={BudgetPack} alt="Budget-Pack"/>
            </div>
        </div>
        <div class="budget-packages-container">
            <div class="our-budget-packages">
                Our Budget Packages
            </div>
        </div>
        <div class="budget-pack-detail-container">
            <div class="budget-p1">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">2 Days 1 Night</span><br/><span> (STARTER PACK)</span></h3>
                    <p class="details">Break-Fast (Per-1)</p>
                    <p class="details">Heavy-Lunch (Per-1)</p>
                    <p class="details">Exclusive-Dinner (Per-1)</p>
                    <p class="details">Single Room (Stadard)</p>
                    <div class="pack-buttons">
                        <button  class="price-pack">2499 BDT</button>
                        <button><Link to ='/user'>Buy</Link></button>  
                    </div>
                </div>
                <h3 class="title-pack">Budget Pack 1</h3>
            </div>
            <div class="budget-p2">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">3 Days 2 Night</span><br/> (MEDIUM PACK)</h3>
                    <p class="details">Break-Fast (Per-1)</p>
                    <p class="details">Heavy-Lunch (Per-1)</p>
                    <p class="details">Exclusive-Dinner (Per-1)</p>
                    <p class="details">Single Room (Stadard)</p>
                    <div class="pack-buttons">
                        <button  class="price-pack">3299 BDT</button>
                        <button><Link to ='/user'>Buy</Link></button>  
                    </div>
                </div>
                <h3 class="title-pack">Budget Pack 2</h3>
            </div>
            <div class="budget-p3">
                <div class="packages">
                    <h3 class="pack-head"><span class="blue-text">4 Days 3 Night</span><br/> <span> (COUPLE PACK)</span></h3>
                    <p class="details">Break-Fast (Per-2)</p>
                    <p class="details">Heavy-Lunch (Per-2)</p>
                    <p class="details">Exclusive-Dinner (Per-2)</p>
                    <p class="details">Double Room (Stadard)</p>
                    <div class="pack-buttons">
                        <button  class="price-pack">8999 BDT</button>
                       <button><Link to ='/user'>Buy</Link></button>  
                    </div>
                </div>
                <h3 class="title-pack">Budget Pack 3</h3>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Budget
