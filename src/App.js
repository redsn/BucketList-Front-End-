//===
// Imports
//===

import './App.css';
import {useState, useEffect}  from 'react';

//===
// Components
//===

import Main from "./components/Main"
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import ShowMovie from './components/ShowMovie';

function App() {

  //State for movie query
  const [movie, findMovie] = useState(null);

  const getMovie = async (term) => {
    const searchFor = await fetch(`http://localhost:4000/api/query/movies/${term}`);

    try {
      const result = await searchFor.json();
      findMovie(result);
    } catch (error) {
      
    }
  }

  // useEffect(() => {
  //   findMovie(null)
  // }, [movie]);


  return (
    <>
    <div className="App">
      <Header />
      {/* <SearchBar getMovie={getMovie} />
      <ShowMovie movie={movie} /> */}
      <Main getMovie={getMovie} movie={movie} />
    </div>
    </>
  );
}

export default App;
