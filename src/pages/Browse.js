import {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledBrowse = styled.section`
    padding-top: 1.5vh;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .posterHold{
        width: 25vw;
    }
    img{
        width: fit-container;
        height: auto;
    }
`

const Browse = ({api}) => {
    const [browse, setBrowse] = useState(null);

    const browseRef = useRef(null);
    const findAllRef = useRef(null);

    const findAll = async () => {
        const search = await fetch(`${api}browse`);

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
        // findAll();
        // browseRef.current()
    },[])

    // function HomeButton() {
    //     let history = useHistory();
      
    // function handleClick() {
    //     history.push("/home");
    // }
    const handlePosterClick = (val) =>{
        // console.log(val);
        window.location.replace(`/search/view/${val}`)
    }

    const loaded = () => {
        const result = browse;

        return(
            <>

            <StyledBrowse>

            {result.map((result, index) => {
                
                const destination = result.imdbID
                
                return(
                
                <div className="posterHold" key={index}>
                <img src={result.Poster} alt={result.Title} onClick={(e) => {handlePosterClick(destination)}} ></img>
                </div>
                    
                )
            })}


            </StyledBrowse>
            </>
        )
    }

    try {
        return browse ? loaded() : <h1>Loading...</h1>
    } catch (error) {
        console.log(error)
        return <p>Error while loading database...</p>
    }

    // return <h1>browseMe</h1>
}

export default Browse