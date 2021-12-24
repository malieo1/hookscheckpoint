import React , {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import movieList from './components/movieList';
import movieListHeading from './components/movieListHeading';
import searchMe from './components/searchMe';

const App = () => {

  const [movies , setMovies] = useState ([]);
  const [searchValue , setSearchValue] = useState ([""])

  const getMovieReaquest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8ab04404`

    const response = await fetch (url);
    const responseJson = await response.json ();

    if ( responseJson.Search){
    setMovies (responseJson.Search);
    } 
  };

  useEffect (()=>{
    getMovieRequest () ;
  }, [searchValue]);


  return <diV className ='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <movieListHeading heading ="LOS FILMS" />
      <searchMe searchValue ={searchValue} setSearchValue ={setSearchValue} />
    </div>
    <div className='row'>
      <movieList movies ={movies} />
    </div>
  </diV>
};

export default App ; 

