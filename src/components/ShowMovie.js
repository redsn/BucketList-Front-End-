// import {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/*
   onList: {type: Array}, // Array of user IDs
    complete: 
*/

const ShowMovie = ({movie, user, api})  => {

    let {findIMDB} = useParams();
    const newApi = `${api}view/`
    // console.log(test);
    // console.log(newApi);

    const [viewMovie, setViewMovie] = useState(null);

    const findByID = async () => {
        const imdbResult = await fetch(`${newApi}${findIMDB}`)
        try {
            const result = await imdbResult.json();
            setViewMovie(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
    findByID();
},[]);


const handleListAppend = async (e) => {
    // e.preventDefault();
    try {
        const addMe = {onList: [user.email]}
        console.log(addMe);
        await fetch(`${newApi}${findIMDB}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addMe)
        })
    } catch (error) {
        
    }
}
    const bucketList = (movieData) => {
        try {
            if(movieData.onList && movieData.complete){
                const complete = movieData.onList.length;
                const onList = movieData.complete.length;
                return(
                    <>
                    <div>
                        <h1>BucketList</h1>
                        {complete} / {onList}
                        <button onClick={handleListAppend}>GTest</button>
                    </div>
                    </>
                )
            } else {throw new Error('error')}
        } catch (error) {
            // console.log('error state');
            const complete = 0;
            const onList = 0;
            return(
                <>
                <div>
                    <h3>Not on Anyone's List</h3>
                    {complete} / {onList}
                </div>
                </>
            )
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
            {result.map((result, index) => {
                // {bucketList()};
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

    // const loadedAPI = () => {
    //     // console.log('error?')
    //     const result = movie.data;
    //     const imdbLink = `https://www.imdb.com/title/${result.imdbID}/`
    //     return(
    //         <>
    //         <h1>{result.Type}</h1>
    //         <h1> {result.Title}</h1>
    //         <img src={result.Poster} alt={result.Title}></img>
    //         <div className="generalData">
    //             <h3>Genre: {result.Genre}</h3>
    //             <h3>Language: {result.Language}</h3>
    //             <h3>Year: {result.Year}</h3>
    //             <h3>Rated: {result.Rated}</h3> 
    //             <h3>Release: {result.Released}</h3>
    //             <h3>Runtime: {result.Runtime}</h3>
    //             <h3>Director: {result.Director}</h3>
    //             <h3>Actors: { result.Actors}</h3>
    //             <h3>Box Office: {result.BoxOffice}</h3>
    //             <h3>Country: {result.Country}</h3>
    //             <h3>DVD Release: {result.DVD}</h3>
    //             <h3>Metascore: {result.Metascore}</h3>
    //             <h3>Awards: {result.Awards}</h3>
    //             <h3>Plot Summary: {result.Plot}</h3>
    //             <h3>Production: {result.Production}</h3>
    //             <h3>Website: {result.Website}</h3>
    //             {result.Ratings.map((result, index) => {
    //                 return(
    //                     <div key={index}>
    //                 <h3>{result.Source}: {result.Value}</h3>
    //                     </div>
    //             );
    //             })}

    //             <h3>Writer(s): {result.Writer}</h3>
    //         </div>

    //         <div className='imdbBox'>
                
    //             imdbid: <a href={imdbLink} target='_blank' rel='noreferrer'>{result.imdbID}</a>
    //             imdbrating: {result.imdbRating}
    //             imdbVotes: {result.imdbVotes}
    //         </div>


    //         </>
    //     )
    // };

    const loaded = () => {
        // const pender = viewMovie
        // console.log(pender)

        const result = viewMovie;
        const imdbLink = `https://www.imdb.com/title/${result.imdbID}/`;
        bucketList(result);
        return(
            <>
            <h1>{result.Type}</h1>
            <h1> {result.Title}</h1>
            <img src={result.Poster} alt={result.Title}></img>
            {bucketList(result)}
            <div className="generalData">
                <h3>Genre:</h3> <p>{result.Genre}</p>
                <h3>Language: </h3><p>{result.Language}</p>
                <h3>Year:</h3> <p>{result.Year}</p>
                <h3>Rated:</h3> <p>{result.Rated}</p> 
                <h3>Release:</h3> <p>{result.Released}</p>
                <h3>Runtime:</h3> <p>{result.Runtime}</p>
                <h3>Director:</h3> <p>{result.Director}</p>
                <h3>Actors:</h3> <p>{ result.Actors}</p>
                <h3>Box Office:</h3> <p>{result.BoxOffice}</p>
                <h3>Country:</h3> <p>{result.Country}</p>
                <h3>DVD Release:</h3> <p>{result.DVD}</p>
                <h3>Metascore:</h3> <p>{result.Metascore}</p>
                <h3>Awards:</h3> <p>{result.Awards}</p>
                <h3>Plot Summary:</h3> <p>{result.Plot}</p>
                <h3>Production:</h3> <p>{result.Production}</p>
                <h3>Website:</h3> <p>{result.Website}</p>
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
    }
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
            return movie ? loaded() : loading();
        } catch (error) {
            // console.log('On MDB attempt')
            return movie ? loadedMDB() : loading();
        }
    } catch (error) {
    }
};

export default ShowMovie;