import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import {useEffect} from 'react';

const StyledResultsMongo = styled.section`
    background-color: green;
    color: green;
    .singleResult{
        border: 1px solid green;
        display: block;
        align-items: center;
        justify-content: center;
    }
    .singleResult h1{
        display: block;
    }
`

function SearchResult ({movie}) {



    const loading  = () => {
        return(
            <>
            <StyledResultsMongo>

            <h1>Loading Something....</h1>

            </StyledResultsMongo>
            </>
        )
    };

    const loadedMDB = () => {
        const result = movie;
        return(
            <>
            <StyledResultsMongo>
            {result.map((result, index) => {
                const destination_url = `view/${result.imdbID}`
                return(
                    <div className="singleResult" key={index}>
                    <h1>{result.Type}</h1>
                    <h1> {result.Title}</h1>
                    <Link to={destination_url}>
                    <img src={result.Poster} alt={result.Title}></img>
                    </Link>
                    </div>
                )
            })}
            </StyledResultsMongo>
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