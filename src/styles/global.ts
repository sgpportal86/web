import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body{
    height:100vh;
    margin: 0;
  }

  body{
    background: #bdbdbd;
    -webkit-font-smoothing: antialiased;
    
    display: flex;
    flex-direction: column;
  }

  body,input,button{
    font: 16px Robot, sans-serif
  }

  #root{
   height: 100%;
  }

  button{
    cursor: pointer;
  }
`