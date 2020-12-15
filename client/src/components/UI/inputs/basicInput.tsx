import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background: none;
    background-color: none;
    color: ${props => props.theme.colors.font.main};
    padding: 10px 15px;
    border-radius: 4px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
    transition: .3s;

    &:focus,
    active{
        background: none;
        outline: none;
        border: 1px solid ${props => props.theme.colors.main};
    };
`

const Input = ({id, type,  name, placeholder, onChange, value}) => {
    return (
      <StyledInput id={id} type={type}  name={name} placeholder={placeholder} onChange={(e)=>onChange(e)} value={value}/>
    )
};

export default Input;