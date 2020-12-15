import styled from 'styled-components';

interface IBox{
    top?: string | number,
    left?:string | number,
    w?: string,
    h?: string,
    disp?: string,
    jc?:string,
    ai?:string,
    fd?:string,
    center?:boolean,
    mt?: string | number,
    mb?: string | number,
    mr?: string | number,
    pr?:string | number,
    pl?: string | number,
    float?: string
}

export const Box = styled.div<IBox>`
    width: ${props => props.w? props.w : "auto"};
    height: ${props => props.h? props.h  : "auto"};
    display: ${props => props.disp? props.disp  : "block"};
    ${props => props.mt && `
        margin-top:  ${props.mt}px;
    `};
    ${props => props.mb && `
         margin-bottom:  ${props.mb}px;
    `};
    ${props => props.jc && `
        justify-content:  ${props.jc};
    `};
    ${props => props.ai && `
        align-items:  ${props.ai};
    `};
    ${props => props.center && `
        margin: 0 auto;
    `};
    ${props => props.fd && `
     flex-direction:  ${props.fd};
     `};
    ${props => props.mr && `
        margin-right:  ${props.mr}px;
    `};
    ${props => props.pl && `
     padding-left:  ${props.pl}px;
    `};
    ${props => props.pr && `
     padding-right:  ${props.pr}px;
    `};
    ${props => props.float && `
        float: ${props.float};
   `};
`

export const AbsoluteBox = styled.div<IBox>`
    position: absolute;
    top: ${props => props.top? props.top + "px" : "0"};
    left:  ${props => props.left? props.left + "px" : "0"};
    width: ${props => props.w? props.w : "auto"};
    height: ${props => props.h? props.h  : "auto"};
`;

export const Center = styled.div<IBox>`
    margin: 0 auto;
    width: ${props => props.w? props.w : "auto"};
    height: ${props => props.h? props.h  : "auto"};
`;
