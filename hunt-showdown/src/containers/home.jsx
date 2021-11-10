import React from "react";
import BombLance from '../gunpics/Bomb_Lance.png'
import CaldwellRival from '../gunpics/Caldwell_Rival_78.png'


const Home = () => {

    var images = [],
    index = 0;
    images[0] = BombLance;
    images[1] = CaldwellRival;

    index = Math.floor(Math.random() * images.length) 
        
    const x = images[index]
    
   


   

    return (
        <div>
        <div>hello</div>
        
        <img src={x}  alt="gun" /> 
       </div>
    )
}

export default Home;