import {useState} from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.a`
    
    .inputtext{
        width: 30vw;
        padding: 3px;
    }
    .inputsub{
        background-color: darkblue;
        color: white;
        font-weight: bold;
        padding: 3px;
    }

    form{
        margin: 1vh
    }

`

const SearchBar = ({getMovie}) => {
    const [ searchState, setSearchState ] = useState({
        searchFor: ''
    });

    const handleChange = (e) => {
        setSearchState({searchFor: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get data declaration
            // console.log(searchState.searchFor);
        getMovie(searchState.searchFor);
        //
        setSearchState({searchFor: ''});
    };
    return(
        <>
        <StyledSearchBar>
            
        <form onSubmit={handleSubmit}>
            <input className="inputtext" type="text" value={searchState.searchFor} onChange={handleChange}/>
            <input className="inputsub" type="submit" value="Search" />
        </form>
        </StyledSearchBar>
        </>
    )
}

export default SearchBar;