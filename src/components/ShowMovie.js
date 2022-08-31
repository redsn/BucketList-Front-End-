import {Link} from 'react-router-dom';
const ShowMovie = ({movie})  => {

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
            {result.map((result, index) => {
                return(
                    <div key={index}>
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


                    </div>
                )
            })}
            </>
        )
        // return(
        //     <>
        //     <h1>{result.Type}</h1>
        //     <h1> {result.Title}</h1>
        //     <img src={result.Poster} alt={result.Title}></img>
        //     <div className="generalData">
        //         <h3>Genre: {result.Genre}</h3>
        //         <h3>Language: {result.Language}</h3>
        //         <h3>Year: {result.Year}</h3>
        //         <h3>Rated: {result.Rated}</h3> 
        //         <h3>Release: {result.Released}</h3>
        //         <h3>Runtime: {result.Runtime}</h3>
        //         <h3>Director: {result.Director}</h3>
        //         <h3>Actors: { result.Actors}</h3>
        //         <h3>Box Office: {result.BoxOffice}</h3>
        //         <h3>Country: {result.Country}</h3>
        //         <h3>DVD Release: {result.DVD}</h3>
        //         <h3>Metascore: {result.Metascore}</h3>
        //         <h3>Awards: {result.Awards}</h3>
        //         <h3>Plot Summary: {result.Plot}</h3>
        //         <h3>Production: {result.Production}</h3>
        //         <h3>Website: {result.Website}</h3>

        //         {/* <h3>Ratings: {result.Ratings}</h3> */}
        //         {/* {result.Ratings.forEach(result => {
        //             {console.log(result.Source)}
        //             <h3>{result.Source}: {result.Value}</h3>
        //         })} */}

        //         {result.Ratings.map((result, index) => {
        //             return(
        //                 <div key={index}>
        //             <h3>{result.Source}: {result.Value}</h3>
        //                 </div>
        //         );
        //         })}

        //         <h3>Writer(s): {result.Writer}</h3>
        //     </div>

        //     <div className='imdbBox'>
                
        //         imdbid: <a href={imdbLink} target='_blank' rel='noreferrer'>{result.imdbID}</a>
        //         imdbrating: {result.imdbRating}
        //         imdbVotes: {result.imdbVotes}
        //     </div>


        //     </>
        // )
    };

    const loadedAPI = () => {
        console.log('error?')
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

    // return movie ? check() : loading();
    // console.log(movie.data);
    // console.log(movie);
    // if(movie.data){
    //     return movie ?  loaded()  : loading();
    // } else if(movie){
    //     return movie ? test() : loading();
    // } else{
    //     return loading();
    // }

    // console.log(movie.Message)
    // if(movie.Message === "Failed"){
        // } else {
            
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