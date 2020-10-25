import { createGlobalStyle } from 'styled-components';

import pokemonLogo from '../assets/trio2.png'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #05a3fe url(${pokemonLogo}) no-repeat center top;
    background-size: 1500px auto;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, tahoma;

  }

  #root {
    max-width: 1060px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }




`;