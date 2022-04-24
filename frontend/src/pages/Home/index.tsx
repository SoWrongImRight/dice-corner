import React from 'react';

// Import Hooks
import { useTitle } from "../../hooks/useTitle";

// Import style
import StyledHome from './Home.styles';

function Home() {
    useTitle("Dice Corner")

    return ( 
        <StyledHome>
            <h1>Home Page</h1>
        </StyledHome>
     );
}

export default Home;