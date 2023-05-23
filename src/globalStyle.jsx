import { createGlobalStyle, styled } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  html {
    color-scheme: dark light;
  }
  html, body {
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    min-height: 100vh;
    overflow: hidden;
    background-color: #F2F2F2;
    @media only screen and (max-width: 1200px) {
      overflow: auto;
  }
  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
  input, textarea, button, select {
    font: inherit;
  }
`;
export default GlobalStyle;
