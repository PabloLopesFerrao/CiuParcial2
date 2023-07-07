import React from 'react';

function ListaFavoritos({ favorites }) {
  return (
    <div>
      <h2>Mis favoritos</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFavoritos;
