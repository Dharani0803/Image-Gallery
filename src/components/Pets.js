import One from "../assets/p.1.jpg"
import Two from "../assets/p.2.jpg"
import Three from "../assets/p.3.jpg"
import Four from "../assets/p.4.jpg"
import Five from "../assets/p.5.jpg"
import Six from "../assets/p.6.jpg"
import React, { useState } from "react";

function Pets(){
    const [showMore, setShowMore] = useState(null);
    const data=[
        {image:One , p:"Enjoy cute and adorable pets that bring",span:" happiness and joy to everyday life 🐾🐶"},
        {image:Two , p:"Explore a lovely collection of pets including", span:" dogs, cats, and other friendly animals 🐱🐾" },
        {image:Three , p:"Discover adorable and playful pets that spread", span:" love and positivity 🐶💖"} ,
        {image:Four , p:"A heartwarming collection of pet images", span:" showcasing cute and friendly animals 🐾📷"} ,
        {image: Five , p:"Experience the joy of pets through charming", span:" and lovable animal pictures 🐱🐶"},
        {image: Six , p:"Pets gallery filled with cute, playful, and", span:" lovable companions 🐾✨"}
    
    ]

    return(
        <div class="nature">
            <h2>Pets</h2>
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

export default Pets