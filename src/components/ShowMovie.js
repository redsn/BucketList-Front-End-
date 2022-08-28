import {Link} from 'react-router-dom';
const ShowMovie = ({movie})  => {
    
    // Testing
    // console.log(movie.data); Remember to search by movie.data or redefine

    /* Temp housing for formating

    {§Title: 'Batman', §Year: '1989', §Rated: 'PG-13', §Released: '23 Jun 1989', §Runtime: '126 min', …}
§Actors: "Michael Keaton, Jack Nicholson, Kim Basinger"
§Awards: "Won 1 Oscar. 9 wins & 26 nominations total"
§BoxOffice: "$251,409,241"
§Country: "United States, United Kingdom"
§DVD: "22 Aug 1997"
§Director: "Tim Burton"
§Genre: "Action, Adventure"
§Language: "English, French, Spanish"
§Metascore: "69"
Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
§Poster: "https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg"
§Production: "N/A"
§Rated: "PG-13"
§Ratings: (3) [{…}, {…}, {…}]
§Released: "23 Jun 1989"
Response: "True"
§Runtime: "126 min"
§Title: "Batman"
§Type: "movie"
Website: "N/A"
§Writer: "Bob Kane, Sam Hamm, Warren Skaaren"
§Year: "1989"
§imdbID: "tt0096895"
§imdbRating: "7.5"
§imdbVotes: "373,505"


    */

    const loading  = () => {
        return(
            <>
            <h1>Loading temp space</h1>
            </>
        )
    };

    const loaded = () => {
        const result = movie.data;
        const imdbLink = `https://www.imdb.com/title/${result.imdbID}/`
        return(
            <>
            <h1>{result.Type}</h1>
            <h1> {result.Title}</h1>
            <img src={result.Poster} alt={result.Title}></img>
            <div className="generalData">
                <h3>Genre: {result.Genre}</h3>
                <h3>Language: {result.Language}</h3>
                <h3>Year: {result.Year}</h3>
                <h3>Rated: {result.Rated}</h3> 
                <h3>Release: {result.Released}</h3>
                <h3>Runtime: {result.Runtime}</h3>
                <h3>Director: {result.Director}</h3>
                <h3>Actors: { result.Actors}</h3>
                <h3>Box Office: {result.BoxOffice}</h3>
                <h3>Country: {result.Country}</h3>
                <h3>DVD Release: {result.DVD}</h3>
                <h3>Metascore: {result.Metascore}</h3>
                <h3>Awards: {result.Awards}</h3>
                <h3>Plot Summary: {result.Plot}</h3>
                <h3>Production: {result.Production}</h3>
                <h3>Website: {result.Website}</h3>

                {/* <h3>Ratings: {result.Ratings}</h3> */}
                {/* {result.Ratings.forEach(result => {
                    {console.log(result.Source)}
                    <h3>{result.Source}: {result.Value}</h3>
                })} */}

                {result.Ratings.map((result, index) => {
                    return(
                        <div key={index}>
                    <h3>{result.Source}: {result.Value}</h3>
                        </div>
                );
                })}

                <h3>Writer(s): {result.Writer}</h3>
            </div>

            <div className='imdbBox'>
                
                imdbid: <a href={imdbLink} target='_blank' rel='noreferrer'>{result.imdbID}</a>
                imdbrating: {result.imdbRating}
                imdbVotes: {result.imdbVotes}
            </div>


            </>
        )
    };

    return movie ? loaded() : loading();
};

export default ShowMovie;