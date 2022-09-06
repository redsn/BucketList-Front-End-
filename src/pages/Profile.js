import {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Profile = ({api}) => {

    const [browse, setBrowse] = useState(null);

    const browseRef = useRef(null);
    const findAllRef = useRef(null);

    const findAll = async () => {
        const search = await fetch(`${api}profile`);

        try {
            const result = await search.json();
            setBrowse(result);
        } catch (error) {
            
        }
    }

    // USE EFFECTS

    useEffect(() => {
        browseRef.current = browse;
        findAllRef.current = findAll;
    })

    useEffect(() => {
        findAllRef.current();
    },[])

    const handlePosterClick = (val) =>{
        window.location.replace(`/search/view/${val}`)
    }

    const loaded = () => {
        const result = browse;
        return(
            <>
            {result.map((result,index) => {
                                
                const destination = result.imdbID

                return(
                
                <div className="posterHold" key={index}>
                <img src={result.Poster} alt={result.Title} onClick={(e) => {handlePosterClick(destination)}} ></img>
                </div>
                    
                )
            })}
            </>
        )
    }

    try {
        return browse ? loaded() : <h1>Loading Data...</h1>
    } catch (error) {
        return <h1>No data found</h1>
    }
};

export default Profile;