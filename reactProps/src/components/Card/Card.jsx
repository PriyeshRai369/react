import React from "react";
import Image from "../Image/Image";

export default function Card(props){
    console.log(props);
    return(
        <div className="card-container">
            <div className="card-img">
                <Image Imglocation={props.location} />
            </div>
            <div className="content">
                <h1>{props.name}</h1>
                <button>
                    <a 
                    href={props.link} 
                    style={{color:"black",textDecoration:"none"}}>
                    Follow Me
                    </a>
                </button>
            </div>
        </div>
    )
}