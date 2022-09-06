//==
// Components
//==
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

function Search ({getMovie, movie}) {
    return(
        <>
        <SearchBar getMovie={getMovie} />
        {/* <ShowMovie movie={movie} /> */}
        <SearchResult movie={movie} />
        </>
    )
}

export default Search;