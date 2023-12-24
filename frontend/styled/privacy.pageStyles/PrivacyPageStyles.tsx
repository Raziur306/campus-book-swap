import styled from "styled-components";

export const PrivacyTitleText = styled.h1`
  font-family: ${(props) => props.theme.fonts.$poppins};
  font-size: clamp(1.8rem, 0.625008rem + 2.4479vw, 3.5625rem);
  font-weight: 475px;
`;

export const PrivacyWrapper = styled.div`
  width: 85%;
  height: auto;
  margin: auto;
  padding: 30px 0;
`;
export const PrivacyTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.$poppins};
  font-weight: 600;
  font-size: 1.15rem;
  color: #000;
`;
export const PrivacyText = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: #666;
  font-family: ${(props) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
  a {
    color: #314f8c;
  }
`;
