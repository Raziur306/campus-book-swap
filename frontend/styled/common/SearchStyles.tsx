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
  transition: all 0.3s ease-in-out;

  & svg {
    animation: ${spin} 0.3s linear infinite;
  }
`;
