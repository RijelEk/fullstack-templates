import styled, {keyframes} from 'styled-components';

const blink = keyframes`
  0 {
    transform: scale(0.9);
  }
  50%{
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.9);
  }
`;

export const Loading = styled.div`
  margin: 100px auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.main};
  animation: ${blink} 1s  infinite;
  animation-timing-function: ease-in-out;
-webkit-animation-timing-function: ease-in-out;

`;