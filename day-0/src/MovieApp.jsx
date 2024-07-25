import axios from "axios";
import { useEffect, useState } from "react";

function MovieApp(){
    const[movie, setMovie]=useState([]);
    console.log(movie);

  async function GetMovie(){
    
      const options = {
         method: 'GET',
         url: 'https://movies-api14.p.rapidapi.com/movie/27205',
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
          setMovie(response.data.contents)
          console.log(response.data.contents);
       } catch (error) {
        console.error(error);
       }
     }

    useEffect(()=>{
        GetMovie()
       },[]);

    return(
<div>
    <h1>Movie</h1>
    {movie.map((moviename)=>(
        <div>
        <img src={moviename.poster_path} alt="img"/>
        <p> {moviename.release_date} </p>
        </div>
    ))}
     
</div>
    );
}
export default MovieApp;