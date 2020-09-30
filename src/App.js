import React, {useState, useEffect} from 'react'

function App() {

const [query, setQuery] = useState('')
const [movies, setMovies] = useState([])


useEffect(() =>{
const url = `https://api.themoviedb.org/3/search/movie/?api_key=d76bde702ec269a95f15cf0cec313b8a&language=en-US&query=${query}&page=1&include_adult=false`
fetch(url)
.then(res => res.json())
.then(data => setMovies(data.results))
},[query])




  return (
    <div style={{ backgroundColor: "black", display:"flex", flexDirection:"column", alignItems: "center", margin:100, borderRadius: 15}}>
    <h1 style={{ fontFamily: "Montserrat", color: "white"}}>React Movie Database</h1>
    <input
    type="text"
    style = {{backgroundColor:"white", color:"black", height: 30, width: 400, marginBottom: 20, borderRadius: 15, outline:"none", fontFamily:"Montserrat", fontSize: 18, textAlign: "center"}}
    placeholder="Ex: Jurassic Park"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    <div>
  { movies? movies.map(movie => (
    <div style={{display: "flex", flexDirection: "column"}}>
    <h1 style={{color: "white", fontFamily: "montserrat"}}>{movie.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    </div>
  )):<h1></h1>}
  </div>
 </div>
  )
}

export default App
