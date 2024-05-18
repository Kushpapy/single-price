import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --Cyan: hsl(179, 62%, 43%);
--Bright-Yellow: hsl(71, 73%, 54%);
--Light-Gray: hsl(204, 43%, 93%);
--Grayish-Blue: hsl(218, 22%, 67%);
--Emerald:#2dd4bf;
}

html{
    font-size: 62.5%;
}

*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    font-family: "Karla", sans-serif;
    background-color: var(--Light-Gray);
    display: grid;
    place-items: center;
}
`;

export default GlobalStyle;
