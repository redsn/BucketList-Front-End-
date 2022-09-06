import {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledProfilePosters = styled.section`
    width: 75%;
    align-items: center;
    padding-top: 1.5vh;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    .posterHold{
        width: 9vw;
        height: 9vh;
    }
    img{
        width: fit-container;
        height: auto;
    }
    h1{
        padding-top: 30vh;
    }

`

const StyledPersonal = styled.div`
    p{
        font-style: italic;
    }
    border: dashed black 2px;
    outline: white 2px solid;
    width: fit-content;
    margin: 2vh auto;
    padding: 2vh;
    box-shadow: 9px 9px rgb(50,50,50);
`

const Profile = ({api, user}) => {

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
        // watchTimeRef.current = watchTime
        // currentUserRef.current = currentUser;
    })

    useEffect(() => {
        findAllRef.current();
        // watchTimeRef.current();
        // currentUserRef.current();
    },[])
    

    const handlePosterClick = (val) =>{
        window.location.replace(`/search/view/${val}`)
    }

    // var str = "Rs. 6,67,000";
    // var res = str.replace(/\D/g, "");

    const loaded = () => {
        const result = browse;
        // let number = 0;
        let time = 0;
        let totalTime = 0;
        let totalWatchTime = 0;
        let globalTime = 0;
        for (let i = 0; i < result.length; i++){
            if(result[i].complete.includes(user.email)){
                time += 1;
                let str = result[i].Runtime;
                let res = str.replace(/\D/g,"");
                let newNum = parseInt(res)
                if (!newNum){
                    newNum = 0;
                }
                // User total time watched/completed
                totalTime += newNum;
            }
            if(result[i].onList.includes(user.email)){
                let str = result[i].Runtime;
                let res = str.replace(/\D/g, "");
                let newNumb = parseInt(res);
                if(!newNumb){
                    newNumb = 0
                }
                totalWatchTime += newNumb
            }
            let globalStr = result[i].Runtime;
            let globalRes = globalStr.replace(/\D/g,"");
            let globalNum = parseInt(globalRes);
            if(!globalNum){
                globalNum = 0
            }
            globalTime += globalNum;
        }
        return(
            <>
            <StyledPersonal>
            <div className="personal">
            <h3>You've watched {time} shows/movies</h3>
            <h3>You've watched {totalTime} minutes of content</h3>
            <p className="ita">*Does not account for series length</p>
            <h3>Your BucketList Total: {totalWatchTime} minutes</h3>
            </div>
            </StyledPersonal>

            <h1>Your Stuff</h1>
            <StyledProfilePosters>
            {result.map((result,index) => {
                
                const destination = result.imdbID
                
                if(result.onList.includes(user.email))
                {
                    
                    return(
                        
                        <div className="posterHold" key={index}>
                        <img src={result.Poster} alt={result.Title} onClick={(e) => {handlePosterClick(destination)}} ></img>
                        </div>
                    
                    )
                    
                } else {return null}
            })}
            <h1>Sites current total: {globalTime} minutes</h1>
            </StyledProfilePosters>
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