import React from 'react';


function Buscador({ searchMovies, setSearchKey }) {
  return (
    <form className=" mb-4 form-group" onSubmit={searchMovies}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese Pelicula"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Buscador;
