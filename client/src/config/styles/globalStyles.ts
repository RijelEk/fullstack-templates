import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
    margin:0;
    padding: 0;
    box-sizing: inherit;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-size:  ${props => props.theme.fontSizes.sm};
    overflow-anchor: none;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.font.main};
    transition: .3s;
  }

  #__next-prerender-indicator {
    display: none;
  };

`