import {useEffect} from 'react';


const ShowMovie = ({movie, user})  => {

    console.log('test');
    console.log(user);

    const bucketList = () => {
        try {
            if(user){
                return <h1>User exists</h1>
            }
        } catch (error) {
            return <h2>No User Found</h2>
        }
    }

    const handleListAppend = async () => {
          
        try {
            const token = await user.getIdToken();
            console.log(token);
        } catch (error) {
            
        }
    }

    const loading  = () => {
        return(
            <>
            <h1>Loading temp space</h1>
            </>
        )
    };

    const loadedMDB = () => {
        const result = movie;
        const imdbLink = `https://www.imdb.com/title/${result.imdbID}/`;

        return(
            <>
            {bucketList()}
            {result.map((result, index) => {
                return(
                    <div key={index}>
                    <h1>{result.Type}</h1>
                    <h1> {result.Title}</h1>
                    <img onClick={handleListAppend} src={result.Poster} alt={result.Title}></img>
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


                    </div>
                )
            })}
            </>
        )
    };

    const loadedAPI = () => {
        // console.log('error?')
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
};

export default ShowMovie;