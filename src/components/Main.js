//===
// Imports
//===
import {Routes,Route} from 'react-router-dom';

//===
// Components
//===

import Home from '../pages/Home';
import Search from '../pages/Search';
import ShowMovie from '../components/ShowMovie';




function Main({getMovie, movie, findMovie, user, api}) {
    // console.log(user);

    return(
        <>
        <main>
            <Routes>

            <Route 
                path="/" 
                element={<Home />} 
            />

            <Route
                path="/search"
                element={<Search getMovie={getMovie} movie={movie} findMovie={findMovie}/>}
            />

            <Route
                path="/search/view/:findIMDB"
                element={<ShowMovie getMovie={getMovie} movie={movie} findMovie={findMovie} user={user} api={api}/>}
            />

            </Routes>
        </main>
        </>
    )
}

export default Main;