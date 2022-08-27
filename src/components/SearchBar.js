import {useState} from 'react';

const SearchBar = (props) => {
    const [ searchState, setSearchState ] = useState({
        searchFor: ''
    });

    const handleChange = (e) => {
        setSearchState({searchFor: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get data declaration
            console.log(searchState.searchFor);
        //
        setSearchState({searchFor: ''});
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchState.searchFor} onChange={handleChange}/>
            <input type="submit" value="Search" />
        </form>
        </>
    )
}

export default SearchBar;