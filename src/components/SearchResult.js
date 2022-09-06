import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import {useEffect} from 'react';

const StyledResultsMongo = styled.section`
    width: 25vw;
    margin: 0 auto;
    .singleResult{
        margin-top: 3vh;
        border: 2px solid grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(250,250,250);
        box-shadow: 7px 7px black;
    }
    .singleResult h1{
        display: block;
        font-size: xx-large;
    }
    .year{
        font-style: italic;
    }
    img{
        border: 30px rgb(220,220,220) solid;
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
                    <div className="singleResult" key={index} >
                    <h1> {result.Title}</h1>
                    <h4 className="year">({result.Type})</h4>
                    <Link to={destination_url}>
                    <img src={result.Poster} alt={result.Title}></img>
                    </Link>
                    <h4 className="year">{result.Year}</h4>
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
            <h1> {result.Title}</h1>
            <h4 className="year">({result.Type})</h4>
            <Link to={destination_url}>
            <img src={result.Poster} alt={result.Title}></img>
            </Link>
            <h4 className="year">{result.Year}</h4>
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