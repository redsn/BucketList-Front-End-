import {Link} from 'react-router-dom';
// import {useEffect} from 'react';

function SearchResult ({movie}) {



    const loading  = () => {
        return(
            <>
            <h1>Loading temp space</h1>
            </>
        )
    };

    const loadedMDB = () => {
        const result = movie;
        return(
            <>
            {result.map((result, index) => {
                const destination_url = `view/${result.imdbID}`
                return(
                    <div key={index}>
                    <h1>{result.Type}</h1>
                    <h1> {result.Title}</h1>
                    <Link to={destination_url}>
                    <img src={result.Poster} alt={result.Title}></img>
                    </Link>
                    </div>
                )
            })}
            </>
        )
    };

    const loadedAPI = () => {
        // console.log('error?')
        const result = movie.data;
        const destination_url = `view/${result.imdbID}`
        return(
            <>
            <h1>{result.Type}</h1>
            <h1> {result.Title}</h1>
            <Link to={destination_url}>
            <img src={result.Poster} alt={result.Title}></img>
            </Link>
            </>
        )
    };
    try {
        if(movie.Message === "Failed"){
                return(
                    <>
                    <p> Unable to find a matching title. Please try again</p>
                    </>
                )
        }
        try {
            // console.log('On try via API');
            return movie ? loadedAPI() : loading();
        } catch (error) {
            // console.log('On MDB attempt')
            return movie ? loadedMDB() : loading();
        }
    } catch (error) {
    }
}

export default SearchResult;