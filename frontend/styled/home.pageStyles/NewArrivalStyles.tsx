import styled from "styled-components";

export const NewArrivalContainer = styled.div`
  width:100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eb5231;
  border-radius: 10px;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
`;

export const NewArrivalWrapper = styled.div`
  width: 18%;
  color: white;
  display: block;
  padding: 1rem;
  height: 100%;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    linear-gradient(183deg, #eb5231 -4.09%, #571fcf 165.15%);
  & p {
    text-align: center;
    transform: rotate(-90deg);
    color: #fff;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    border-radius: 10px;
  }
`;
