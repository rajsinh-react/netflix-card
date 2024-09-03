import React from "react";
import movieData from "./api/netflix.json";
import { SeriesData } from "./component/seriesdata.tsx";


export const Netflix:React.FC = ()=>{
    return <ul className="grid grid-third--cols">
        {
            movieData.map((movie,index)=>(
                // day 1
                
                //<li key={index}>
                //     <div>
                //         <img src={movie.img_url} alt="loading" />
                //     </div>
                //     <h2>Name:{movie.name}</h2>
                //     <h4>Rating:{movie.rating}</h4>
                //     <p>Description:{movie.description}</p>
                //     <p>Genre:{movie.genre}</p>
                //     <p>cast:{movie.cast}</p>
                //     <a href={movie.watch_url}><button>Watch now</button></a>
                //     <hr/>
                // </li>
                <SeriesData key={index}  movie={movie}/>
                // |||||||||||||||||||||||data = {movie}
            ))
        }
    </ul>
}


