import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const ErrorPageSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40%;
  padding: 2%;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }

  & h3 {
    color: #314f8c;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: clamp(
      1.5rem,
      calc(1.5rem + ((1vw - 0.48rem) * 2.2569)),
      3.125rem
    );
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & h5 {
    color: #314f8c;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: clamp(1.25rem, calc(1.25rem + ((1vw - 0.48rem) * 1.0417)), 2rem);
    font-weight: 400;
    line-height: normal;
  }
  & p {
    color: #7f7f7f;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.8681)), 1.625rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn-title {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.2778)), 1.2rem);
    padding: 12px;
    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }
`;

export const ServerErrorSvgWrapper = styled.div`
  width: 100%;
  position: absolute;
  aspect-ratio: 6/3;
  & ~ h4 {
    color: #314f8c;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    z-index: 99;
    position: absolute;
    left: 40%;
    right: 50%;
    top: 45%;
    font-size: clamp(
      1.25rem,
      calc(1.25rem + ((1vw - 0.48rem) * 2.6042)),
      3.125rem
    );
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 30%;

    @media screen and (max-width: 768px) {
      top: 24%;
    }
  }
`;
export const ServerErrorTextWrapper = styled(ErrorPageSubContainer)`
  z-index: 99;
  margin: auto auto 0 auto;
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;