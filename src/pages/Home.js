import styled from 'styled-components';
import {useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeStyle = styled.section`
    border: 1px solid black;
    background-color: white;
    width: fit-content;
    margin: 5vh auto;
    padding: 3vw;
    box-shadow: 5px 5px grey;
    border-radius: 3px;
`


function Home ({api, user}) {

    const [oneState, setOneState] = useState(null);
    const navigate = useNavigate();

    const oneStateRef = useRef(null);
    const findOneRef = useRef(null);

    const findOne = async () => {
        const queryOne = await fetch(`${api}browse`);

        try{
            const result = await queryOne.json();
            let max = result.length;
            let ran = Math.floor(Math.random() * max);
            // console.log(result);
            setOneState(result[ran]);
        } catch(error){
            // console.log(error)
        }
    }

    useEffect(()=>{
        oneStateRef.current = oneState;
        findOneRef.current = findOne;
    })

    useEffect(()=>{
        // oneStateRef.current();
        findOneRef.current();
    },[])

    const handlePosterClick = (val) =>{
        // console.log(val);
        // window.location.replace(`/search/view/${val}`)
        navigate(`/search/view/${val}`);
    }

    const loaded = () => {
        const result = oneState;
        const destination = result.imdbID
        const people = result.complete.length;
        let exVar = null;
        if(!people){
            exVar = 0
        } else {
            exVar = people
        }
        return(
            <>
            <HomeStyle>
                <h1>Featuring: {result.Title}</h1>
                <div className="posterHold">
                <img src={result.Poster} alt={result.Title} onClick={(e) => {handlePosterClick(destination)}} ></img>
                <h3>Watched by {exVar}</h3>
                </div>
                    
            </HomeStyle>
                
            </>
        )
    }

    try {  
        return oneState ? loaded() : <h1>Loading...</h1>
    } catch (error) {
        console.log(error);
        return <h1>Database Error...</h1>
        
    }
}

export default Home;