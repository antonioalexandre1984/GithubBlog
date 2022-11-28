import styled from 'styled-components';

export const PostContentContainer = styled.section`
margin-bottom: 8rem;
display: flex;
padding: 2.5rem 2rem;
flex-direction: column;
gap: 1rem;

img{
    width: 100%;
}

h1, h2, h3, h4, h5, h6 {
    color:${({ theme }) => theme.colors['brand-blue']};
}

ul{
    list-style: inherit;
    padding-left: 1.5rem;
}

pre{
    background-color: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;

    > div{
        background: none !important;
        padding: 0 !important;
        margin: 0 !important;

        code{
            font-family: 'FiraCode', monospace !important;
            line-height: 160% !important;
        }
    }
}

`;
