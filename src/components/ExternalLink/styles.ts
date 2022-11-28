import styled, { css } from 'styled-components';

interface ExternalLinkProps {
    variant?: 'iconLeft';
}
export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
background: none;
border: none;
color: ${({ theme }) => theme.colors['brand-blue']};
font: ${({ theme }) => theme.textSizes['components/link']};
text-transform: uppercase;
display: flex;
align-items: center;
gap: 0.5rem;
font-weight: 700;
line-height: 1.2rem;
transition: 0.4s;
border-bottom: 1px solid transparent;
height: 1.2rem;

svg{
width: 0.75rem;
height: 0.75rem;
}

&:hover{
    border-color: ${({ theme }) => theme.colors['brand-blue']};
}

${({ variant }) => variant === 'iconLeft' && css`
    flex-direction: row-reverse;

`};

`;
