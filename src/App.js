import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import Footer from './Componentes/Footer/footer';
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
  

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [movie, setMovie] = useState({ title: "Loading Movies" });
 

  //Agregar seccion favoritos
  let [favorites, setFavorites] = useState([]);


   // Función para eliminar una película de la lista de favoritos
   function removeFromFavorites(movie) {
    setFavorites((favorites) => favorites.filter((fav) => fav.id !== movie.id));
  }


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

  // funcion para la peticion de un solo objeto 
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    //return data
    setMovie(data);
  };

  
    // Obtener la lista de favoritos del localStorage
useEffect(() => {
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites) {
    favorites= JSON.parse(savedFavorites);
    setFavorites(JSON.parse(savedFavorites));
  }
}, []);

// Guarda la lista de favoritos en el localStorage cada vez que se actualice "favorites"
useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);



  // funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  

//Funcion para agregar a favoritos
function addToFavorites(movie) {
  if (!favorites.some((fav) => fav.id === movie.id)) {
    setFavorites((listFavorites) => [...listFavorites, movie]);
  }
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
              <ListaPeliculas movies={movies}  URL_IMAGE={URL_IMAGE} addToFavorites={addToFavorites} />
            </>
          } />
          <Route path="/favoritos" element={<ListaFavoritos favorites={favorites} URL_IMAGE={URL_IMAGE} removeFromFavorites={removeFromFavorites} />
} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

    </div>
    
  );
}

export default App;