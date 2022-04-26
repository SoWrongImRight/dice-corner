import styled from "styled-components";

const StyledNavbar = styled.div`
    background: linear-gradient(90deg, rgba(40,11,5,1) 0%, rgba(128,35,14,1) 35%);
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    button {
        background: none;
        outline: none;
        border: none;
        color: white;
        align-self: center;
        cursor: pointer;
    }

    .searchIcon {
        cursor: pointer;
        align-self: center;
    }

    .closeIcon {
        margin-right: 1rem;
        align-self: center;
        cursor: pointer;
    }
`

export default StyledNavbar;