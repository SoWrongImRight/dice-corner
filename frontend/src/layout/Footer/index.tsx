import React from 'react';

import StyledFooter from "./Footer.styles";

function Footer() {
    const cpYear = new Date().getFullYear()

    return ( 
        <StyledFooter>
            <p>&copy; {cpYear} Dice Corner </p>
        </StyledFooter>
     );
}

export default React.memo(Footer);