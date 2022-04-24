import React, { useContext, useEffect } from 'react';

import { StyledHeader } from "./Header.styles";

import { TitleContext } from "../../contexts/titleContext";


const Header: React.FC = () => {
    const { title } = useContext(TitleContext)

    useEffect(() => {
        document.title = title;
    },[title])
    
    return ( 
        <StyledHeader >
            <div className="headerBackground">
                <h1>{title}</h1>
            </div>

        </StyledHeader>
     );
}

export default React.memo(Header);