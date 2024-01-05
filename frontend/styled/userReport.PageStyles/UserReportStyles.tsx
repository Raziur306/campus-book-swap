import styled from "styled-components";

export const ReportTitleHeroContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  position: relative;
  width: 100%;
  justify-content: center;
  padding-bottom: 15px;
  &:after {
    content: "";
    width: 90%;
    height: 1.5px;
    position: absolute;
    bottom: 0;
    background: #0000006b;
  }
`;

export const ReportTitleTextWrapper = styled.div`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fa7c54;
    text-align: center;
  }
  & p {
    font-size: 1rem;
    color: #181818;
    text-align: center;
    font-weight: 500;
  }
`;



export const ReportStyledTable = styled.table`
  width: 100%;
  height: 100%;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & th {
    border: 1px solid black;
    padding: 6px;
    background: gray;
    color: white;
  }

  & td {
    border: 1px solid black;
    padding: 6px;
    color: #000000;
  }
`;
