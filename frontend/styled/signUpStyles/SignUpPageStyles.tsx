import styled from "styled-components";

export const StyledSignUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("/bg/background.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const StyledSignUpInputField = styled.input<{ $error?: boolean }>`
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #fff;
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  border: 1px solid ${(props: any) => (props.$error ? "red" : "#dcd9d9")};
  &:focus {
    outline: none !important;
    border: 2px solid ${(props: any) => (props.$error ? "red" : "black")};
  }
`;

export const StyledSignUpLabel = styled.label`
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;

export const StyledSignUpBtn = styled.button`
  margin-bottom: 1rem;
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
