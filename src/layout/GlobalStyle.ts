import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: "Karla";
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    :root {
        --error-red: #ff0033
    }
`;
