//===
// Imports
//===

import './App.css';
import {useEffect, useState}  from 'react';
import { onAuthStateChanged, auth } from './firebase';

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

  // User login
  const [ userState, setUserState ] = useState(null);

  // effect for unsub // will watch for changes and ensure  user actually signs out
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUserState(user)
    });
    return unsubscribe;
  }, []);


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
      <Header user={userState}/>
      <Main getMovie={getMovie} movie={movie} user={userState}/>
    </div>
    </>
  );
}

export default App;
