import { useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";

function Moviepractice (){
    const[movie,setMovie]=useState([]);
    console.log(movie)

    async function GetMovie(){
        const options = {
            method: 'GET',
            url: 'https://movies-api14.p.rapidapi.com/search',
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
        <div  className="maindiv">
            {movie.map((moviename)=>(
            <div className="card">
                 <p onClick={() => window.open(moviename.youtube_trailer, "_blank")}>{moviename.title}</p>
                 <img src={moviename.poster_path} alt="img" />
                 <p> {moviename.release_date} </p>
                 <p> {moviename.vote_average}({moviename.vote_count}) </p>
                    {/* <p>{moviename.genres}</p> */}
                 <p>{moviename.overview}</p>
                  </div>
            ))}
        </div>
    )
}

export default Moviepractice;






























