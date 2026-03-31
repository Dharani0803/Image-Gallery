import One from "../assets/n.1.jpg"
import Two from "../assets/n.2.jpg"
import Three from "../assets/n.3.jpg"
import Four from "../assets/n.4.jpg"
import Five from "../assets/n.5.jpg"
import Six from "../assets/n.6.jpg"
import React, { useState } from "react";
function Nature(){
    const [showMore, setShowMore] = useState(null);
    const data=[
        {image:One , p:"Explore the beauty of nature through peaceful",span:" landscapes, forests, rivers, and sunsets 🌿🌄"},
        {image:Two , p:"Enjoy stunning natural scenes filled with", span:" greenery, mountains, and peaceful views 🌳🌅" },
        {image:Three , p:"Discover the beauty and serenity of nature in", span:" this relaxing image collection 🌿📷"} ,
        {image:Four , p:"Nature gallery showcasing beautiful", span:" landscapes and peaceful environmental scenes 🌄🌱"} ,
        {image: Five , p:"Explore beautiful nature scenes filled with", span:" greenery, mountains, rivers, and peaceful landscapes 🌿🌄"},
        {image: Six , p:"Enjoy peaceful nature images that bring", span:" freshness, greenery, and relaxation 🌳🌅"}
    
    ]

    return(
        <div class="nature">
            <h2>Nature</h2>
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

export default Nature