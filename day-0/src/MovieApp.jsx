import { useEffect, useState } from "react";
import {axios} from "axios";
import "./movie.css";


function MovieApp(){
    const[movieApp ,setMovieApp]=useState([]);
    console.log(movieApp );
    

    async function GetMovieApp(){
        
        const options = {
          method: 'GET',
          url: 'https://movies-api14.p.rapidapi.com/shows',
          params: {
          query: 'breaking bad'
                   },
          headers: {
           'x-rapidapi-key': 'd328ea5cf5msha0339b0526fc2f0p170e62jsn588b66a35588',
           'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
           }
         };

         try {
           const response = await axios.request(options);
           setMovieApp(response.data.contents)
           console.log(response.data.contents);
           } catch (error) {
           console.error(error);
            }
    }

    useEffect(()=>{
        GetMovieApp()
          },[]);
        
return(
  <div>
      <h1>Movies</h1>
      <div className="maindiv">
      <div className="card">
             {movieApp.map((movie)=>(
                 <div>
                  <p>{movie.title}</p>
                  <img src={movie.poster_path} alt="img" />
                  <p> {movie.release_date} </p>
                  <p> {movie.vote_average}({movie.vote_count}) </p>
                  <p>{movie.overview}</p>
               </div>
           ))}
        </div>
           </div>
    </div>
    
    );
}
export default MovieApp;