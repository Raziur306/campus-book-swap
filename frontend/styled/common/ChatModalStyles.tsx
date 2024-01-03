import styled from "styled-components";

export const ChatModalContainer = styled.div`
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  border-radius: 10px;
`;

export const ChatBodyContainer = styled.div`
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

export const SendMsg = styled(MessageTilesStyle)`
  margin-left: auto;
  justify-content: right;
  & p {
    max-width: 80%;
    margin-left: auto;
  }
`;

export const ReceivedMsg = styled(MessageTilesStyle)`
  justify-content: start;
  margin-right: auto;
  & p {
    background: gray;
    max-width: 70%;
  }
`;

export const ChatModalInputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #fff;
  padding: 15px;
  & textarea {
    width: 100%;
    height: 52px;
    border-radius: 25px;
    background: #80808022;
    outline: none;
    resize: none;
    padding-bottom: 0.875rem;
    padding-top: 0.875rem;
    padding-left: 1rem;
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
    &.active {
      background-color: #030373;
      color: white;
    }
  }
`;
