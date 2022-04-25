import { createGlobalStyle } from "styled-components";
import AlmendraRegular from "../fonts/Almendra/Almendra-Regular.ttf";
import MetamorphousRegular from "../fonts/metamorphous/Metamorphous-Regular.ttf";
import Hamlet from "../fonts/Hamlet/Hamletornot-K7y7.ttf";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        position: relative;

        @font-face {
            font-family: "Almendra";
            src: url(${AlmendraRegular}) format("truetype");
        }

        @font-face {
            font-family: "Metamorphous";
            src: url(${MetamorphousRegular}) format("truetype");
        }

        @font-face {
            font-family: "Hamlet";
            src: url(${Hamlet}) format("truetype");
        }
    }

    body {
        box-sizing: border-box;
        font-size: calc(10px + 2vmin);
        font-family: Verdana, sans-serif;
        overflow-x: hidden;
        z-index: 1;
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Hamlet"; //Georgia, 'Times New Roman', Times, serif;
        letter-spacing: 0.25rem;
    }

    button {
        font-family: "Metamorphous";
    }

    // Variables
    --primaryPrimaryColor: #0A2463;
    --primarySecondaryColor: #69BADD;
    --primaryTertiaryColor: #C8040E;
    --primaryFourthColor: #605F5E;
    --primaryFifthColor: #E2E2E2;
`
export default GlobalStyle;