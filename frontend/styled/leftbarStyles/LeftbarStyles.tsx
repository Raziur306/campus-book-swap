import styled, { keyframes } from "styled-components";

const sideBarAnimation = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(0);
}
`;

export const LeftbarContainer = styled.div`
  width: 20%;
  height: 100vh;
  background: white;
  padding: 2rem;
  flex: 0 0 auto;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  position: sticky;
  top: 0;
  &.display-nav {
    min-height: 100% !important;
    flex-shrink: 0 0 auto;
    bottom: 0;
    display: flex !important;
    flex-direction: column;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    z-index: 1 !important;
    width: 40% !important;
    animation: ${sideBarAnimation} 0.3s ease-in-out;
  }
`;

export const StyledMenuDiv = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: #8a8a8a;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;
  &.active {
    color: #fa7c54 !important;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & p {
    position: relative;
    & span {
      width: 23px;
      height: 23px;
      position: absolute;
      top: -5px;
      text-align: center;
      font-size: 0.8rem;
      background: red;
      color: white;
      border-radius: 50%;
    }
    &:after {
      content: "";
      width: 0%;
      height: 1.7px;
      background: #fa7c54;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;
