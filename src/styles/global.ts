import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-label']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

`;
