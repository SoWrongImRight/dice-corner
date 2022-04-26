import styled from "styled-components";

const StyledSideNavV2 = styled.div`
    width: 10vw;
    position: absolute;
    left: 0;
    display: grid;
    overflow: hidden;
    background: rgba(255,255,255,0.25);

    .search-div {
        width: 10vw;
        padding-left: 0.5rem;
    }

    ul {
        list-style: none;
        margin: 1rem 0.5rem;

        li {
            cursor: pointer;
            padding: 0.5rem 0;

            a {
                font-family: "Hamlet";
            }
        }
    }
`

export default StyledSideNavV2;