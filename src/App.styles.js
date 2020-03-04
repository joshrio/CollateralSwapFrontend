import styled, { createGlobalStyle } from "styled-components";
import pattern_light from "./assets/backgrounds/pattern_light.svg";
import oval_full from "./assets/backgrounds/oval_full.svg";

import dinRegular from "./assets/fonts/din-next-regular-latin-1.ttf";
import dinBold from "./assets/fonts/din-next-bold-latin-1.ttf";
import media from './components/constants/media.js'


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

export const Container = styled.div`
  background: #f9f9f9;
  background-image: url(${pattern_light});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 74px);
  overflow: scroll;
  position: absolute;
  width: 100%;
`;

export const OvalFirst = styled.div`
  background-image: url(${oval_full});
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  transform: rotate(90deg);
`;

export const OvalSecond = styled.div`
  background-image: url(${oval_full});
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  top: -64px;
  right: 0;
  position: absolute;
  z-index: 0;
  transform: rotate(-90deg);
`;
