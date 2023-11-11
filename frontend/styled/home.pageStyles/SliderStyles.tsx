import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    linear-gradient(141deg, #eb5231 -29.15%, #571fcf 151.64%);
  color: #fff;
  padding: 3rem;
  & h1 {
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
