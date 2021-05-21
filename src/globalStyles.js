import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Pattaya', sans-serif;
  background-blend-mode: difference;
  scrollbar-color: #D35422 #59859c;
  
  
  overflow: auto;
  margin: 0;
  padding:0;
  padding-top:5em;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
