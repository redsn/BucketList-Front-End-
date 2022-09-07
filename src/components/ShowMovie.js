// import {useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';

/*
   onList: {type: Array}, // Array of user IDs
    complete: 
*/

const StyledSingleView = styled.section`

    background-color: rgb(245,245,245);
    img{
        width: 40vh;
    }
    .generalData{
        display: inline-block;
        width: 75vw;
        border: 2px black solid;
        box-shadow: 5px 5px grey;
    }
    .bucketClass{
        border: 5px black solid;
        box-shadow: 10px 10px 5px grey;
        margin: 20px auto;
        display: block;
        width: fit-content;
        padding: 2vh;
        h1{
            font-size: medium;
        }
        button{
            display: block;
            border: 2px black solid;
            padding: 0.75vh;
            background-color: lightblue;
            color: white;
            font-weight: bold;
            margin: 10px auto;
            font-size: large;
        }
        button:hover{
            background-color: darkblue;
        }
    }
    div{
        width: fit-content;
        display: inline-block;
    }
    img{
        border: 10px solid white;
        outline: 2px solid black;
        box-shadow: 4px 4px 2px grey;
    }
    .generalData div{ 
        padding: 3vw;
    }
    margin: 0 auto;
    .movieTitle{
        font-size: xxx-large;
        text-shadow: 6px 6px 3px rgb(230,230,230);
    }
    padding-top: 2vh;
    padding-bottom: 3vh;
    .plot{
        display: block;
        margin: 10px auto;
        border: 1px dotted black;
        box-shadow: 4px 4px grey;
    }
    .buttons{
        display: block;
        padding-top: 5px;
        margin: 0 auto;
    }
    .non-reg{
        margin-top: 10px;
        font-style: italic;
        display: block;
        font-size: smaller;
    }
`

const ShowMovie = ({movie, user, api})  => {

    let {findIMDB} = useParams();
    const newApi = `${api}view/`
    const rmvApi =  `${api}mod/`

    // search/view/tt0147746

    const navigate = useNavigate();


    const findByIdRef = useRef(null);
    const loadedRef = useRef(null);
    const loadingRef = useRef(null);
    const viewMovieRef = useRef(null);

    const [viewMovie, setViewMovie] = useState(null);

    // const updateThisPage = () => {setViewMovie((prevState)=>({
    //     console.log(prevState)
        
    //     // onList: Array.push(user.email)
    // }))}
    // const updateThisPage = () => {setViewMovie((prevState)=>(console.log(prevState),{
    //     // ...prevState,
    //     // onList: [...this.movie.onList, `${user.email}`]
    // }))}

    const findByID = async () => {
        const imdbResult = await fetch(`${newApi}${findIMDB}`)
        try {
            const result = await imdbResult.json();
            setViewMovie(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        findByIdRef.current = findByID;
        loadedRef.current = loaded;
        loadingRef.current = loading;
        viewMovieRef.current = viewMovie;
    })

    useEffect(() => {
        findByIdRef.current();
},[]);


const handleOnList = async (e) => {
    // e.preventDefault();
    try {
        const addMe = {onList: user.email}
        // console.log(addMe);
        await fetch(`${newApi}${findIMDB}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addMe)
        },navigate(`/search/view/${findIMDB}`));
    } catch (error) {
        
    }
}

const handleComplete = async (e) => {
    try {
        const addMe = {complete: user.email};
        await fetch(`${newApi}${findIMDB}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addMe)
        },navigate(`/search/view/${findIMDB}`));
    } catch (error) {
        
    }
}

const handleRemoveOnList = async (e) => {
    try {
        const removeMe = {onList: user.email}
        await fetch(`${rmvApi}${findIMDB}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removeMe)
        },navigate(`/search/view/${findIMDB}`))
    } catch (error) {
        
    }
}

const handleRemoveComplete = async (e) => {
    try {
        const removeMe = {complete: user.email}
        await fetch(`${rmvApi}${findIMDB}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removeMe)
        },navigate(`/search/view/${findIMDB}`))
    } catch (error) {
        
    }
}


    const bucketList = (movieData) => {
        try {
            if(movieData.onList && movieData.complete){
                const complete = movieData.complete.length;
                const onList = movieData.onList.length;
            // Default View
            function defaultView () {
                return (
                    <>
                    <div>
                        <h1>BucketList</h1>
                        Finished {complete} / {onList} Listed
                        <div className="non-reg">
                        *You must be registered to add this to your List
                        </div>
                    </div>
                    </>
                )
            }; 
            // needs add to list; new item/not in favs
            function notOnList () {
                return(
                    <>
                    <div>
                        <h1>BucketList</h1>
                        Finished {complete} / {onList} Listed
                        <div className="buttons">
                        <button onClick={handleOnList}>Add To List</button>
                        </div>
                    </div>
                    </>
                )
            }
            function isOnList () {
                return(
                    <>
                    <div>
                        <h1>BucketList</h1>
                        Finished {complete} / {onList} Listed
                        <div className="buttons">
                        <button onClick={handleComplete}>I've Watched this</button>
                        <button onClick={handleRemoveOnList}>Remove From List</button>
                        </div>
                    </div>
                    </>
                )
            }; // remove from list & complete
            function onListAndComplete () {
                return(
                    <>
                    <div>
                        <h1>BucketList</h1>
                        Finished {complete} / {onList} Listed
                        <div className="buttons">
                        <button onClick={handleRemoveComplete}>Unwatch</button>
                        <button onClick={handleRemoveOnList}>Remove From List</button> 
                        </div>
                    </div>
                    </>
                )
            }
            try {
                if(!user){
                    return defaultView();
                }
                try {
                    if(!movieData.onList.includes(user.email)){
                        return notOnList();
                    }
                    try {
                        if(movieData.onList.includes(user.email) && !movieData.complete.includes(user.email)){
                            return isOnList();
                        }
                        try {
                            if(movieData.complete.includes(user.email)){
                                return onListAndComplete();
                            }
                        } catch (error) {
                            
                        }
                    } catch (error) {
                        
                    }
                } catch (error) {
                    
                }
            } catch (error) {
                
            }
        /// Error handling
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
            <StyledSingleView>
            <h1>Loading temp space</h1>
            </StyledSingleView>
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
                    <>
                    <StyledSingleView>

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
                    </StyledSingleView>
                    </>
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
        console.log('on loaded')

        const result = viewMovie;
        const imdbLink = `https://www.imdb.com/title/${result.imdbID}/`;
        bucketList(result);
        return(
            <>
            <StyledSingleView>

            <h1 className="movieTitle"> {result.Title}</h1>
            <h5>({result.Type})</h5>
            <img src={result.Poster} alt={result.Title}></img>
            <div className="bucketClass">
            {bucketList(result)}
            </div>
            <div className="generalData">
                <div className="plot"><h3>Plot Summary:</h3> <p>{result.Plot}</p></div>
               <div><h3>Genre:</h3> <p>{result.Genre}</p></div>
                <div><h3>Language: </h3><p>{result.Language}</p></div>
                <div><h3>Year:</h3> <p>{result.Year}</p></div>
                <div><h3>Rated:</h3> <p>{result.Rated}</p> </div>
                <div><h3>Release:</h3> <p>{result.Released}</p></div>
                <div><h3>Runtime:</h3> <p>{result.Runtime}</p></div>
                <div><h3>Director:</h3> <p>{result.Director}</p></div>
                <div><h3>Actors:</h3> <p>{ result.Actors}</p></div>
                <div><h3>Box Office:</h3> <p>{result.BoxOffice}</p></div>
                <div><h3>Country:</h3> <p>{result.Country}</p></div>
                <div><h3>DVD Release:</h3> <p>{result.DVD}</p></div>
                <div><h3>Metascore:</h3> <p>{result.Metascore}</p></div>
                <div><h3>Awards:</h3> <p>{result.Awards}</p></div>
                <div><h3>Production:</h3> <p>{result.Production}</p></div>
                <div><h3>Website:</h3> <p>{result.Website}</p></div>
                {result.Ratings.map((result, index) => {
                    return(
                        <div key={index}>
                    <h3>{result.Source}: {result.Value}</h3>
                        </div>
                );
            })}

                <h3>Writer(s): {result.Writer}</h3>
            <div className='imdbBox'>
                
                <div><h3>imdbid:</h3> <a href={imdbLink} target='_blank' rel='noreferrer'>{result.imdbID}</a></div>
                <div><h3>imdbrating:</h3> {result.imdbRating}</div>
                <div><h3>imdbVotes:</h3> {result.imdbVotes}</div>
            </div>
            </div>



            </StyledSingleView>
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
            // return movie ? loaded() : loading();
            return viewMovie ? loaded() : loading();
        } catch (error) {
            // console.log('On MDB attempt')
            return movie ? loadedMDB() : loading();
        }
    } catch (error) {
        try {
            return viewMovie ? loaded() : loading();
        } catch (error) {
            return <h1>Something went wrong</h1>
        }
    }
};

export default ShowMovie;