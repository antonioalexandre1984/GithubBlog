import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Link)`
width: 100%;
height: 16.25rem;
border-radius: 0.675;
background: ${({ theme }) => theme.colors['base-post']};
color: ${({ theme }) => theme.colors['base-text']};
padding: 2rem;
transition: 0.4s;

&:hover{
    border-color: ${({ theme }) => theme.colors['base-label']};
}

header{
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong{
        display: -webkit-box;
        --webkti-box-orient: vertical;
        -webkit-line-clamp: 2;
        flex:1;
        font-size: ${({ theme }) => theme.textSizes['title-title-m']};
        color: ${({ theme }) => theme.colors['base-title']};
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span{
        width: max-content;
        font-size: ${({ theme }) => theme.textSizes['text-text-s']};
        color: ${({ theme }) => theme.colors['base-span']};
    }

}

p{
   overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}

`;
