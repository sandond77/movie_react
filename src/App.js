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

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='Search'>
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
    </div>
  )
}
