import styled from 'styled-components';
import logoSrc from '../../assets/Cover.svg';

export const HeaderContainer = styled.div`
width: 100%;
height: 18.5rem;
background: url(${logoSrc}) no-repeat center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

img{
    margin-bottom: 5rem;
}
`;
