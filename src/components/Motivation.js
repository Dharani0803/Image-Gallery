import One from "../assets/m.1.jpg"
import Two from "../assets/m.2.jpg"
import Three from "../assets/m.3.jpg"
import Four from "../assets/m.4.jpg"
import Five from "../assets/m.5.jpg"
import Six from "../assets/m.6.jpg"
import React, { useState } from "react";

function Motivation(){
    const [showMore, setShowMore] = useState(null);
    const data=[
        {image:One , p:"Read inspiring motivational quotes that",span:" encourage positivity, success, and confidence 💬✨"},
        {image:Two , p:"Explore powerful quotes that motivate and", span:" inspire you to achieve your goals 💪📖" },
        {image:Three , p:"Discover uplifting motivational quotes that", span:" bring confidence and positive thinking 🌟💬"} ,
        {image:Four , p:"Enjoy meaningful motivational quotes that", span:"  encourage success and determination 💪✨"} ,
        {image: Five , p:"Motivational quotes gallery filled with", span:" positive and inspiring thoughts 💬🌟"},
        {image: Six , p:"Explore powerful words that inspire ", span:" confidence, hard work, and success 💬🏆"}
    ]

    return(
        <div class="nature">
            <h2>Motivation</h2>
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

export default Motivation