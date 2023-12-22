import styled from "styled-components";

export const FQATitleText = styled.h1`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 4rem;
  font-weight: bold;
`;
export const FQATitleSubTitleText = styled.p`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1.25rem;
  font-weight: 500;
  color: #808080f9;
`;

export const LinkWrapper = styled.div`
  margin: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & a {
    font-weight: 500;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1.23rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    &:after {
      content: "";
      width: 0;
      height: 2px;
      background: #fa7c54;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: #434141;
      &:after {
        width: 100%;
      }
    }
  }
`;

export const UsefulLinksText = styled.h1`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  width: fit-content;
  color: #fa7c54;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #fa7c54;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const QACardContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  position: relative;
  cursor: pointer;
  padding-right: 10px;
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    &:after {
      content: "";
      width: 25px;
      height: 3px;
      background: #fa7c54;
      position: absolute;
      right: 0;
      top: 50%;
    }
    &::before {
      content: "";
      width: 25px;
      height: 3px;
      background: #fa7c54;
      position: absolute;
      right: 0;
      top: 50%;
      transform: ${(props: any) =>
        props.$isActive ? "rotate(0)" : "rotate(90deg)"};
      transition: all 0.3s ease-in-out;
    }
  }
  & p {
    display: ${(props: any) => (props.$isActive ? "block" : "none")};
    padding-right: 10px;
    transition: all 5s ease-in-out;
    font-size: 1.1rem;
  }
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: gray;
    margin-top: 15px;
  }
`;
