import styled from "styled-components";

export const StyledTitleText = styled.p`
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-weight: bold;
  font-size: 1.9rem;
  & span {
    color: #fa7c54;
  }
`;

export const StyledSubTitleText = styled.p`
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-weight: bold;
  font-size: 1.9rem;
`;
