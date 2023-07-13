import React from 'react';
import { Button } from 'react-bootstrap';

function ListaFavoritos({ favorites, URL_IMAGE, removeFromFavorites }) {
  return (
    <div className="container mt-3">
      <h2>Mis favoritos</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-3 movie-container">
            <img
              className="img-enlarge"
              src={`${URL_IMAGE + movie.poster_path}`}
              alt={movie.title}
              height={320}
              width="100%"
            />
            <h4 className="text-center">{movie.title}</h4>
            <Button variant="danger" onClick={() => removeFromFavorites(movie)}>Eliminar</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaFavoritos;
