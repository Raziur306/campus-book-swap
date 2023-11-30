import styled from "styled-components";

export const ChatModalContainer = styled.div`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  border-radius: 10px;
`;

export const ChatBodyContainer = styled.div`
  padding: 15px;
  max-height: 300px;
  overflow-y: auto;
`;

const MessageTilesStyle = styled.div`
  display: flex;
  & p {
    text-align: center;
    min-width: 50px;
    width: fit-content;
    background: #1f1fee;
    color: #fff;
    padding: 10px 15px;
    border-radius: 100px;
  }
`;

export const SendMsg = styled(MessageTilesStyle)`
  justify-content: right;
`;

export const ReceivedMsg = styled(MessageTilesStyle)`
  justify-content: start;
  & p {
    background: gray;
  }
`;

export const ChatModalInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #fff;
  padding: 15px;
  & input {
    width: 100%;
    border: 1px solid gray;
    padding: 10px 15px;
    border-radius: 50px;
  }
  & button {
    border-radius: 10px;
    background-color: #8080805c;
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    & svg {
      transform: rotate(-30deg);
    }
  }
`;
