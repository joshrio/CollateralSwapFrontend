import { createGlobalStyle } from "styled-components";

import dinRegular from "./assets/fonts/din-next-regular-latin-1.ttf";
import dinBold from "./assets/fonts/din-next-bold-latin-1.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'dinRegular', 'dinBold', serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @font-face {
     font-family: 'dinRegular';
     src: url(${dinRegular});
  }

    @font-face {
     font-family: 'dinBold';
     src: url(${dinBold});
  }

  }

  }`;

export default GlobalStyle;
