import styled from "styled-components";

export const ConversationContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
`;

export const ConversationProfileWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & h3 {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-weight: 600;
  }
`;

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background: #80808020;
  min-height: 60vh;
  max-height: 60vh;
  overflow-y: auto;
  scroll-behavior: auto;
`;

export const ConversationInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #fff;
  padding: 15px;
  & input {
    width: 100%;
    min-height: 60px;
    border: 1px solid gray;
    padding: 10px 15px;
    border-radius: 50px;
    font-size: 1.3rem;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
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

const ConversationTilesStyle = styled.div`
  display: flex;
  & p {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    text-align: center;
    min-width: 50px;
    width: fit-content;
    background: #1f1fee;
    color: #fff;
    padding: 10px 15px;
    border-radius: 100px;
  }
`;

export const ConversationSendMsg = styled(ConversationTilesStyle)`
  justify-content: right;
`;

export const ConversationReceivedMsg = styled(ConversationTilesStyle)`
  justify-content: start;
  & p {
    background: gray;
  }
`;
