import React from "react";
import "./Aside.css";
const Aside=()=>{
return(
    <>

    <div className="header-container">
    <h2>Logo</h2>
    <div >
    <img id="col" src="property.png" alt=""></img>
    <h3 >Property</h3>
    </div>
    
    <div>
    <img src="notification.png" alt=""></img>
    <h1>Assistant</h1>
    </div>
    <div>
    <img src="RI.png" alt=""></img>
        <h1>Received interest</h1>
    </div>
    <div>
        <img src="SI.png" alt=""></img>
        <h1>Sent interest</h1>
    </div>
   <div>
    <img src="i.png" alt=""></img>
    <h1>Property views</h1>
    </div>
    <div>
        <img src="Tag.png"alt=""></img>
        <h1>Tariff Plan</h1>
    </div>
    </div>

    </>
)
}
export default Aside;