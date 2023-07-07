import React from 'react';

function ListaPeliculas({ movies, selectMovie, URL_IMAGE, addToFavorites }) {
  return (
    <div className="container mt-3">
      <div className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-md-3 mb-3"
            onClick={() => selectMovie(movie)}
          >
            <img
              className="img-enlarge"
              src={`${URL_IMAGE + movie.poster_path}`}
              alt=""
              height={320}
              width="100%"
            />
            <h4 className="text-center">{movie.title}</h4>
            <button onClick={() => addToFavorites(movie)}>Agregar a favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaPeliculas;
