import styled from "styled-components";

export const StyledVerifyContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  height: 100vh;
  background-image: url("/bg/background.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const StyledVerifyLoginBtn = styled.button`
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
  width: 26.375rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #fa7c54;
  border: 1px solid #fa7c54;
  color: #fff;
  margin-top: 1rem;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  &:hover {
    background: #f5835f;
  }
`;
