import React, { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

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
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
          
        </div>
      </div>
    </div>
  )
}
