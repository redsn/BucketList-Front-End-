//===
// Imports 
//===

import {Link} from 'react-router-dom';
import {login, logout} from '../firebase';

//===
// Component
//===

const Header = ({user}) => {
    // user => firebase user
    return(
        <>
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="search">
            <div>Search</div>
        </Link>
        <div onClick={login}>
            Login
        </div>
        <div onClick={logout}>
            Logout
        </div>
        </>)
};

export default Header;