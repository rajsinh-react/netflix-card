import "./CardHeading.css"
import React from "react";



 //day 2 -----destructurind props
 // exprot cost Seriesdata =( img_url,name,rating,cast,genre,description,watch_url) =>{
 // -------- code----------
//}
 export const  SeriesData = (props)=>{
    const{ img_url,name,rating,cast,genre,description,watch_url} = props.movie
    //netflix 24    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||=props.data

    //note inline css style pass as object
    const btn={
        padding : "1.2rem 2.4rem",
     
        border:"none",
        fontsize:"1.6rem",
        color:"var( --bg-color)",
        backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f" }`,
        fontWeight:"bold",
        
    
        
    }
    return(
      <li className="card">
        <div className="card-contain" >
        <img src={img_url} alt="Loading"  width="40%" height="40%"/>
        <h2>Name: {name}</h2>
        <p>Rating:
            <span className={rating >= 8.5 ? "super_hit" : "average_hit"}> 
                {rating}
            </span>
        </p>
        <p>Cast: {cast.join(", ")}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Summary: {description}</p>
        <a href={watch_url}><button style={btn}>watch now</button></a>
        
        </div>
      </li>  
    );

 }
 /// in style component value access by propse oe state