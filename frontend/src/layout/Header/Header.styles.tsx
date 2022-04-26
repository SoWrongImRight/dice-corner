import styled from "styled-components";

export const StyledHeader = styled.div`

  h1  {
    text-align: center;
    color: white;
  }
  
  .headerBackground {
    height: 360px;
    width: auto;
/*     background-image: url('/assets/images/dice-corner-header.jpg');
    background-position: center center; */
    position: relative;
    
    @media (max-width: 680px) {
      height: 15vh;
      width: auto;
    }

    .titleBox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);

      @media (max-width: 680px) {
        width: 100vw;
        height: auto;
      }
    }
  }

`
