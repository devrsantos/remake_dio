import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
        background: #1E192C;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export { GlobalStyle }