import styled from 'styled-components';


export const Header = styled.h1`
    color: ${props => props.theme.colors.font.main},
    font-size: ${props => props.theme.fontSizes.bg},
    font-weight: 500;
`


export const Header2 = styled.h2`
    color: ${props => props.theme.colors.font.main},
    font-size: ${props => props.theme.fontSizes.md},
    font-weight: 500;
`