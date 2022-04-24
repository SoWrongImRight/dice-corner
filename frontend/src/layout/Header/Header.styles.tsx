import styled from "styled-components";

export const StyledHeader = styled.div`

  h1  {
    text-align: center;
    color: white;
  }
  
  .headerBackground {
    height: 360px;
    width: auto;
    background-image: url('/assets/images/dice-corner-header.jpg');
    background-position: center center;

    @media (max-width: 680px) {
      width: 100%;
      height: auto;
    }
  }

`
