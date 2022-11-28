import { createGlobalStyle } from 'styled-components';
import fireCode from '../assets/fonts/FiraCode.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Firacode';
    src: url(${fireCode}) format('ttf');
    font-weight: 400;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
       background: ${({ theme }) => theme.colors['base-background']};
        color: ${({ theme }) => theme.colors['base-text']};
        -web-kit-smooth-font-smoothing: antialiased;
}

body,input,text-area,button{
    font: 400 ${({ theme }) => theme.textSizes['text-text-m']} 'Nunito', sans-serif;
    line-height: 160%;
}

ul{
    list-style: none;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
    color: inherit;
}
`;