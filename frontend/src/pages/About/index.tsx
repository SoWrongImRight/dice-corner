import { useTitle } from "../../hooks/useTitle";

import StyledAbout from './About.styles';

function About() {
    useTitle("About Dice Corner")

    return ( 
        <StyledAbout>
            <h1>About</h1>
        </StyledAbout>
     );
}

export default About;