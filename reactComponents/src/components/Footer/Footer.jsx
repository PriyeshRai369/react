import React from "react";

export default function Footer(){
    const click = (e)=>{
        let value = e.target
        value.innerText = "Clicked";
    }
    return(
        <footer>
            <p style={{textAlign:"center",fontFamily:"monospace",fontWeight:"800"}}>
                created by Priyesh Rai.
            </p>
            <h4 style={{textAlign:"center",fontFamily:"monospace",fontWeight:"800"}}>This is footer section</h4>
            <h3 onClick={click} style={{textAlign:"center",fontFamily:"monospace",fontWeight:"800"}}>Follow Me</h3>
        </footer>
    )
}