import React, { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=449c886e';

export default function App() { 
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
  };

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value="superman"
          onChange={()=>{}}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={()=>console.log("clicked")}
        />
      </div>

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  )
}
