import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Search from '../../components/Search';

import StyledNavbar from './Navbar.styles';
import { BsQuestionCircle } from 'react-icons/bs';
import { FaRegTimesCircle } from "react-icons/fa";

import { navLinks } from '../../data/navData'

function Navbar() {
    const location = useLocation();
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        setIsSearch(false)
    }, [location])

    return ( 
        <StyledNavbar>
            {navLinks.map(nav => <Link key={nav.name} to={nav.url} style={{alignSelf: "center"}}><button><a>{nav.name.toUpperCase()}</a></button></Link> )}    
            { isSearch ?
                <>
                    <Search clear={false} />
                    <FaRegTimesCircle onClick={() => setIsSearch(false)} className="closeIcon" />
                </>
                :
                <>
                    <BsQuestionCircle className="searchIcon" onClick={() => setIsSearch(!isSearch) }/>
                </>
            }
        </StyledNavbar>
     );
}

export default Navbar;