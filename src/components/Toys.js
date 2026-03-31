import One from "../assets/c.1.jpg"
import Two from "../assets/c.2.jpg"
import Three from "../assets/c.3.jpg"
import Four from "../assets/c.4.jpg"
import Five from "../assets/c.5.jpg"
import Six from "../assets/c.6.jpg"
import React, { useState } from "react";

function Toys(){
    const [showMore, setShowMore] = useState(null);
    const data=[
        {image:One , p:"Explore stylish and powerful cars showcasing",span:" speed, design, and modern technology 🚗✨"},
        {image:Two , p:"Discover a stunning collection of sports and", span:" classic bikes built for thrill and adventure 🏍️🔥" },
        {image:Three , p:"Experience the beauty of modern and high-", span:" performance cars in this exciting gallery 🚗🔥"} ,
        {image:Four , p:"Enjoy powerful and attractive car images", span:" from sports to luxury models 🚗💨"} ,
        {image: Five , p:"A dynamic collection of bikes featuring speed,", span:" innovation, and bold design 🏍️📷"},
        {image: Six , p:"Cars gallery filled with modern, classic, and", span:" high-speed vehicles 🚘✨"}
    
    ]

    return(
        <div class="nature">
            <h2>Toys</h2>
        <div className="card">
      {data.map((item, index) => (
        <div className="n" key={index}>
          
          <img src={item.image} alt="" />

          <p>
            {item.p}
            {showMore === index && <span>{item.span}</span>}
          </p>

          <p class="read" onClick={() => setShowMore(showMore === index ? null : index)}>
            {showMore === index ? "Read Less" : "...Read More"}
          </p>

        </div>
      ))}
    </div>
            </div>        
    )
}

export default Toys