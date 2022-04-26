import React, { useContext, useEffect } from 'react';

import { GiDiceTwentyFacesOne, GiDiceTwentyFacesTwenty } from 'react-icons/gi'

import { StyledHeader } from "./Header.styles";

import { TitleContext } from "../../contexts/titleContext";


const Header: React.FC = () => {
    const { title } = useContext(TitleContext)

    useEffect(() => {
        let pageTitle: string
        if (title != 'Dice Corner'){
            pageTitle = "Dice Corner - " + title
        } else {
            pageTitle = "Dice Corner"
        }
        document.title = pageTitle;
    },[title])
    
    return ( 
        <StyledHeader >
            <div className="headerBackground">
                <div className="titleBox">
                    <h1>Dice Corner</h1>
                    {title != 'Dice Corner' ? <><h1><GiDiceTwentyFacesOne title="twenty sided die" />{title}<GiDiceTwentyFacesTwenty title="twenty sided die" /></h1></> : <h1 style={{visibility: 'hidden'}}>Home</h1> }
                </div>
            </div>

        </StyledHeader>
     );
}

export default React.memo(Header);