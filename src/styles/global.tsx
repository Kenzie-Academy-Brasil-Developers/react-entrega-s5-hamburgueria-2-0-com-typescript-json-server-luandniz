import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body,
header,
div,
ul,
li,
a,
p,
h1,
h2,
h3,
figure,
nav,
span,
footer {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: sans-serif;
}

:root{
  --black: #010101;
  --lightblue: #6dbad4;
  --gray: #555;
  --white: #ffffff;
  --offwhite: #ecf0f3;

  --font: 'Roboto', sans-serif;
}

body{
background: #e0e0e0;
}


h1, h2, h3, p, span, button{
  font-family: var(--font);
  color: var(--gray)
 
}


button{
  cursor: pointer;
}

a{
    text-decoration: none;
}

`;

export default GlobalStyle;
