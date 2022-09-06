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

  // const api_link = 'http://localhost:4000/api/query/movies/'
  const api_link = 'https://bucketlist-backend-proj.herokuapp.com/api/query/movies/'

  //State for movie query
  const [movie, findMovie] = useState(null);
  // const [viewMovie, setViewMovie] = useState(null);

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
    const searchFor = await fetch(`${api_link}${term}`);

    try {
      const result = await searchFor.json();
      // console.log(result);
      findMovie(result);
    } catch (error) {
      
    }
  }


  return (
    <>
    <div className="App">
      <Header user={userState}/>
      <Main getMovie={getMovie} movie={movie} user={userState} api={api_link} findMovie={findMovie}/>
    </div>
    </>
  );
}

export default App;
