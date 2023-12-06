import styled from "styled-components";

export const ActionModalContentWrapper = styled.div`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  padding: 1rem;
  text-align: center;
`;

export const ModalLoadingContentWrapper = styled.div`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  & span {
    margin-top: 15px;
  }
`;
