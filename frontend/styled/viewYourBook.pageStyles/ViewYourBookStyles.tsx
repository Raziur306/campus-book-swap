import styled from "styled-components";

export const ViewYourBookContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 25px;
`;

export const ViewYourBookTitleText = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const ViewYourBookInfoTable = styled.table`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & td {
    padding: 5px;
    font-size: 1rem;
  }
`;

