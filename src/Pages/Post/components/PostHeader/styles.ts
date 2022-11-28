import styled from 'styled-components';

export const PostHeaderContainer = styled.div`
width: 100%;
min-height: 10.5rem;
margin-top: -5.5rem;
background: ${({ theme }) => theme.colors['base-profile']};
border-radius: 0.625rem;
padding: 2rem;
display: flex;
flex-direction: column;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
}
h1{
    font-size:${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
    margin-bottom: 0.5rem;
}

ul{
    display: flex;
    align-items: center;
    gap:2rem;
    flex-wrap: wrap;
        li{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: ${({ theme }) => theme.textSizes['text-text-m']};
            color: ${({ theme }) => theme.colors['base-span']};
            line-height: 0px;
            
            svg{
                width: 1.12rem;
                height: 1.12rem;
                color: ${({ theme }) => theme.colors['base-label']};
            }

        }



}


`;
