import React, { useEffect } from 'react'

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
    <div>App</div>
  )
}
