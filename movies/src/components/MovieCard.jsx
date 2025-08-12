import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { IoMdAddCircle } from "react-icons/io";


const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  const handleAddToFavorites = () => {
    // Recupera os favoritos atuais do localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Verifica se o filme já está nos favoritos
    const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
    
    if (!isAlreadyFavorite) {
      // Adiciona o filme ao array de favoritos
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      
      // Opcional: Mostrar um feedback visual (ex: toast)
      alert(`${movie.title} foi adicionado aos favoritos!`);
    } else {
      alert("Este filme já está nos favoritos!");
    }
  };



  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar/> {movie.vote_average}
      </p>
      <p>
        <IoMdAddCircle 
          onClick={handleAddToFavorites} 
          style={{ cursor: "pointer" }} // Muda o cursor para indicar que é clicável
        /> 
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
    </div>
  )
}

export default MovieCard