//===
// Imports
//===

import './App.css';
import {useState}  from 'react';

//===
// Components
//===

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ShowMovie from './components/ShowMovie';

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


  return (
    <>
    <div className="App">
      <Header />
      <h1>Placeholder</h1>
      <SearchBar getMovie={getMovie} />
      <ShowMovie movie={movie} />
    </div>
    </>
  );
}

export default App;
