import React,{useState,useEffect} from 'react'
import instance from '../instance'
import requests from '../requests'
import './Banner.css'

function Banner() {
const [movies,setMovies]= useState([])
 async function fetchData(){
    const request=await instance.get(requests.fetchNetflixOriginals)
    setMovies(request.data.results[
        Math.floor(Math.random() *request.data.results.length - 1)
    ])
 }

 useEffect(() => {
  fetchData()
 }, [])
 console.log("Banner movie is ",movies);

 function truncate(str,n){
  return str?.length > n ?str.substr(0,n-1)+"...." :str;

 }
  return (
   <header className='header'
   style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
    backgroundPosition:"center center",
    
   }}
   >
<div className='banner__contents'>
  <h1 className='banner_title'>
    {movies.title || movies.name || movies.original_name}
  </h1>
  <h1 className='banner_description'>
    {truncate(movies?.overview,150)}
  </h1>
</div>
   </header>
  )
}

export default Banner