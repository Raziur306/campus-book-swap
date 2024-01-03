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
  background: #fa7b54b9;
  border-radius: 10px;
  & h3 {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-weight: 600;
    color: #fff;
  }
`;

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
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
  & textarea {
    width: 100%;
    max-height: 65px;
    border-radius: 50px;
    font-size: 1.3rem;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    background: #80808022;
    outline: none;
    resize: none;
    padding-bottom: 0.875rem;
    padding-top: 0.875rem;
    padding-left: 1.5rem;
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

export const ConversationReport = styled.button`
  margin-left: auto;
  padding: 8px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  background: red;
  border-radius: 5px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #ff0000c6;
  }
`;
