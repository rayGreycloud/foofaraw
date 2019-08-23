import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { 
    --almost_black: #111111;
    --white: #ffffff;
    --grey: grey;
    --dark_grey: darkgrey;
    --darker_grey: #4a4a4a;

    --google_blue: #4285f4;
    --google_blue_hover: #357ae8;
  }

  body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 60px;
  }

  a {
    text-decoration: none;
    color: var(--darker_grey);
    font-weight: bolder;
  }
`;
