import { useState, useEffect } from "react"; /* importing a hook from the React library */


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies ] = useState([]) /*This would be an example of using UseState */
  
  /*@Get*/ /*http method to retrieve data provided by API */
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json() /*Here we are transforming the response into a json*/
    setTopMovies(data.results);
    
  }

  /*Chamando o metodo `getTopRatedMovies`*/
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
  
    getTopRatedMovies(topRatedUrl)
    


  }, [] /* <= The array is empty because we only need to execute it when the component (or page) is loaded. */) 
  

  return (
    <div>
     {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}

export default Home
