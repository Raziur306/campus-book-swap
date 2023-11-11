import styled from "styled-components";

export const StyledContributionTextField = styled.input`
  height: 100%;
  min-height: 52px;
  padding: 16px;
  border-radius: 8px;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid #dcd9d9;
  background: #fff;
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const StyledContributeInputLabel = styled.label`
  color: #4c535f;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 112.4%;
`;

export const StyledContributionTextArea = styled.textarea`
  resize: none;
  padding: 16px;
  min-height: 200px;
  border-radius: 8px;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid #dcd9d9;
  background: #fff;
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const StyledBookSubmitBtn = styled.button`
  width: 201px;
  height: 49px;
  flex-shrink: 0;
  color: #fff;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 8px;
  background: #f4683c;
  transition: 0.7s ease-in-out;
  &:hover {
    background: #ff8761;
  }
`;
