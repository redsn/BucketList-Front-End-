//===
// Imports 
//===

import React from 'react';
import {Link} from 'react-router-dom';
import {login, logout} from '../firebase';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:  center;
    margin: 0 auto;
    background-color: lightblue;
    padding: 1rem;
    border-bottom: darkblue solid 3px;
    a{
        text-decoration: none;
        color: white;
    }
    .logger{
        background-color: darkblue;
        color: white;
        padding: 1vh;
        font-weight: bold;
    }
    .logger:hover{
        background-color: lightblue;
        color: black;
        box-shadow: 5px 5px black;
    }
    .navButton{
        text-decoration: none;
        color: white;
        font-size: larger;
        font-weight: bold;
        padding: 1rem;
    }
    .navButton:hover{
        background-color: darkblue;

    }
    .titlecard{
        color: black;
        font-size: xx-large;
        font-weight: bold;
    }

`

//===
// Component
//===

const Header = ({user}) => {
    // user => firebase user
    return(
        <>
        <StyledHeader user={user}>
        <Link to="/">
            <div><h3 className="titlecard">BucketList</h3></div>
        </Link>
            <div className="navButton">Home</div>
        <Link to="search">
            <div className="navButton">Search</div>
        </Link>
        <div className="auth-box">

        {/* <div onClick={login}>
            Login
        </div>
        <div onClick={logout}>
            Logout
        </div> */}
            {
                user ?
                <>
                <div><h3>{user.displayName}</h3></div>
                <div onClick={logout} className="logger">Log out</div>
                </>
                :
                <div onClick={login} className="logger">Log in</div>
            
            }

        </div>
        </StyledHeader>
        </>)
};

export default Header;