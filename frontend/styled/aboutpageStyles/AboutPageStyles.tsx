import styled, { keyframes } from "styled-components";

export const MainTitleTextStyle = styled.h1`
  color: #fec536;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const AboutMainTitleText = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  font-size: 4rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const AboutParagraph = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const AboutMotiveText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  width: 50%;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const moveLeftRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(-5%);
  }
  30% {
    transform: translateX(-10%);
  }
  45% {
    transform: translateX(-16%);
  }
  75% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(-25%);
  }
`;

export const StyledPrevBtn = styled.div`
  width: 80px;
  height: 50px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: end;
  transition: translate 0.5s ease-in-out;
  color: #fa7c54;
  & svg {
    width: 50px;
    animation: ${moveLeftRight} 1s ease-in-out infinite;
    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  &:hover {
    justify-content: center;
    & svg {
      animation: none;
    }
  }
`;
