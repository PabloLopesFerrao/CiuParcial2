
import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import Footer from './Componentes/footer';
import Buscador from './Componentes/Buscador/Buscador';
import Header from './Componentes/Header/header';
import Titulo from './Componentes/Titulo/titulo';
import ListaFavoritos from './Componentes/ListaFavoritos/listaFavoritos';
import ListaPeliculas from './Componentes/ListaPeliculas/listaPeliculas'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';




function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "8d9cef87878ee6d08a142854dfa3d717";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);


  //Agregar seccion favoritos
  const [favorites, setFavorites] = useState([]);


  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });


    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    // const data = await fetchMovie(movie.id)
    // console.log(data);
    // setSelectedMovie(movie)
    fetchMovie(movie.id);

    setMovie(movie);
  };

  // funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  //Funcion para agregar a favoritos
  function addToFavorites(movie) {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  }
  

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div>

<BrowserRouter>
      <div>
        <Titulo />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Buscador searchMovies={searchMovies} setSearchKey={setSearchKey} />
              <ListaPeliculas movies={movies} selectMovie={selectMovie} URL_IMAGE={URL_IMAGE} addToFavorites={addToFavorites} />
            </>
          } />
          <Route path="/favoritos" element={<ListaFavoritos favorites={favorites} />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

    </div>
    
  );
}

export default App;
