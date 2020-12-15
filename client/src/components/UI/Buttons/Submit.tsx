import styled from 'styled-components';

export const Submit = styled.button`
    color: white;
    font-size: ${props => props.theme.fontSizes.sm};
    background: ${props => props.theme.colors.main};
    outline: none;
    padding: 10px 20px;
    border: none;
    cursor:pointer;
    border-radius: 4px;

    &:focus,active{
        outline: none;
        border: none;
    };

`