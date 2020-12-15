import styled from 'styled-components';
import Link from 'next/link';


const StyledLink = styled.a`
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.sm};
    text-decoration: none!important;
    display: inline-block;
    
    position: relative;
`;

export default ({ href, name }) => (
  <Link  href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </Link>
)