import styled, { keyframes } from "styled-components";

export const SearchBookWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
}`;

export const ShowSearchResultContainer = styled.div<{
  $isResultModalOpen?: boolean;
}>`
  position: absolute;
  top: 55px;
  width: 400px;
  height: ${(props: any) => (props.$isResultModalOpen ? "400px" : "0px")};
  max-height: 400px;
  overflow-y: auto;
  background: #fff;
  border-radius: 10px;
  z-index: 2;
  box-shadow: 0px 0px 26px 1px #00000039;
  transition: all 0.2s ease-in-out;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & svg {
    animation: ${spin} 0.3s linear infinite;
  }
`;
