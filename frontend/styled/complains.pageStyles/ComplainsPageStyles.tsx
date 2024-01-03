import styled from "styled-components";

export const StyledComplainsTable = styled.table`
  background: #fff;
  width: 100%;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: #6e6d6d;

  @media screen and (max-width: 768px) {
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
  }

  & tr {
    border-bottom: 1px solid #e5e7eb;
  }
  & th {
    font-weight: 500;
    padding: 10px;
    text-align: start;
    font-size: 1rem;
  }
  & td {
    padding: 20px 10px;
    text-align: start;
    font-weight: 400;
    font-size: 1rem;
    & button {
      padding: 10px 15px;
      border-radius: 20px;
      text-align: center;
      display: block;
      background: #ff000041;
      color: red;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ComplainsChatModalContainer = styled.div`
  padding: 15px;
  max-height: 500px;
  min-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & span {
    font-size: 1rem;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    color: #808080a7;
    margin: auto;
  }
`;

const MessageTilesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & p {
    min-height: 40px;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    text-align: start;
    min-width: 50px;
    width: fit-content;
    background: #1f1fee;
    color: #fff;
    padding: 15px 20px;
    border-radius: 100px;
  }
`;

export const ReporterMessage = styled(MessageTilesStyle)`
  justify-content: start;
  margin-right: auto;
  & p {
    max-width: 80%;
    margin-left: auto;
  }
`;

export const ViolatedMessage = styled(MessageTilesStyle)`
  margin-left: auto;
  justify-content: right;
  & p {
    background: #ff5349;
    max-width: 70%;
  }
`;
