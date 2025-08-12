import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Favorites.css"; // Arquivo CSS que vamos criar

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h2 className="title">Meus Filmes Favoritos</h2>
      
      {favorites.length === 0 ? (
        <p style={{ color: "#fff", textAlign: "center" }}>Nenhum filme salvo ainda. 😢</p>
      ) : (
        <div className="movies-container">
          {favorites.map((movie) => (
            <div key={movie.id}>
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