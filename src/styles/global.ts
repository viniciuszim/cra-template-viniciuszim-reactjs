import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    width: 100%;
  }

  #root {
    background-color: red;
    display: flex;
    height: 100%;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }
`;
