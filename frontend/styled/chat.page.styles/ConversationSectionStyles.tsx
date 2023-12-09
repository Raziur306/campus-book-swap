import styled from "styled-components";

export const ConversationContainer = styled.div`
  width: 70%;
  height: 100%;
  min-height: 81vh;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  & span {
    font-size: 1rem;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    color: #808080a7;
    margin: auto;
  }
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

export const ConversationInputFieldWrapper = styled.form`
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
    &.active {
      background-color: #030373;
      color: white;
    }
  }
`;

const ConversationTilesStyle = styled.div`
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

export const ConversationSendMsg = styled(ConversationTilesStyle)`
  margin-left: auto;
  justify-content: right;
  & p {
    max-width: 80%;
    margin-left: auto;
  }
`;

export const ConversationReceivedMsg = styled(ConversationTilesStyle)`
  justify-content: start;
  margin-right: auto;
  & p {
    background: gray;
    max-width: 70%;
  }
`;
