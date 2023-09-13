import styled from "styled-components";

export const LeftbarContainer = styled.div`
  width: 20%;
  height: 100vh;
  background: white;
  padding:2rem;
`;

export const StyledMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: #8a8a8a;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor:pointer;
  &.active {
    color: #fa7c54!important;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
