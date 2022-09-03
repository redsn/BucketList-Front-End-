//===
// Imports 
//===

import {Link} from 'react-router-dom';

//===
// Component
//===

const Header = (props) => {
    return(
        <>
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="search">
            <div>Search</div>
        </Link>
        </>)
};

export default Header;