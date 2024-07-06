import { useEffect, useState } from "react";
import {axios}  from "react-axios"


function MovieApp(){
    const[MovieApp ,setMovieApp]=useState([]);
    console.log(MovieApp ,"MovieApp");
    

    async function  GetMovieApp(){
        
       

const options = {
       method: 'GET',
       url: 'https://movies-api14.p.rapidapi.com/shows',
       headers: {
        'x-rapidapi-key': 'd328ea5cf5msha0339b0526fc2f0p170e62jsn588b66a35588',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
           }
         };

     try {
	   const response = await axios.request(options);
	   console.log(response.data);
       setMovieApp([response.data])
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
           {MovieApp.map((movies)=>(
               <div>
                <p>overview:{movies.overview}</p>
               
               </div>
           ))}

    </div>
    
    );
}
export default MovieApp;