import { createGlobalStyle } from "styled-components";

/**
 * Notes:
 *
 * I decided to use css variables as there wasn't anything in the
 * exercise for customization. If there were, then I'd use a
 * ThemeProvider and have the custom values passed in through there
 *
 * I hard coded the responsive breakpoints inline as css variables
 * cannot be used for media queries. Since styled components run through
 * a scss parser, i could have used mixins for all media queries, but
 * chose against it.
 */

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
        --error-red: #ff0033;
        --success-green: #32cd32;
    }
`;
