//===
// Imports
//===
import {Routes,Route,Navigate} from 'react-router-dom';

//===
// Components
//===

import Home from '../pages/Home';
import Search from '../pages/Search';




function Main({getMovie, movie}) {

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

            </Routes>
        </main>
        </>
    )
}

export default Main;