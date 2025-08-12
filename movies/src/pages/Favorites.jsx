import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Favorites.css"; // Estilos opcionais

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Carrega os favoritos do localStorage ao iniciar
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Remove um filme dos favoritos
  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      <h1>Meus Filmes Favoritos</h1>
      
      {favorites.length === 0 ? (
        <p>Nenhum filme salvo ainda. 😢</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <div key={movie.id} className="favorite-movie">
              <MovieCard movie={movie} showLink={true} />
              <button
                onClick={() => handleRemoveFavorite(movie.id)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;