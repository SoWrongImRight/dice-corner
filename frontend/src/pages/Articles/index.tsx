import { Outlet } from 'react-router-dom'

import { useTitle } from "../../hooks/useTitle";

import StyledArticles from './Articles.styles';

function Articles() {
    useTitle("Articles")

    return ( 
        <StyledArticles>
            
            <Outlet />
        </StyledArticles>
     );
}

export default Articles;