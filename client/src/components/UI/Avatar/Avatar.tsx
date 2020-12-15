import styled from 'styled-components';

export const Avatar = styled.div`
    border-radius:50%;
    width: 20px;
    height: 20px;
    background-image: url(${props => props.background ? props.background : "none"});
    background-size: cover;
    background-position:center;
    border: 1px solid white;
    background-color: gray;
`
