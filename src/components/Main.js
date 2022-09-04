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




function Main({getMovie, movie, user}) {
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
                element={<Search getMovie={getMovie} movie={movie}/>}
            />

            <Route
                path="/search/:title"
                element={<ShowMovie getMovie={getMovie} movie={movie} user={user}/>}
            />

            </Routes>
        </main>
        </>
    )
}

export default Main;