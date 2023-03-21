import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    border: none;
  }

  input {
    border: none;
    :focus-visible {
      outline: none;
    }
  }

  :root {
    --color--black: #191919;
    --color-white: #ffffff;
    --color-light-gray: #aaaaaa;
    --color-normal-gray: #333333;
    --color-red: #990101;
  }
`;
export default GlobalStyles;
