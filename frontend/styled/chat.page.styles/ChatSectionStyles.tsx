import styled from "styled-components";

export const ChatSectionContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  & h1 {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const ChatSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 74vh;
  max-height: 74vh;
  overflow-y: auto;

  & .not-found {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    height: 100%;
    margin: auto;
  }
`;

export const ChatCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #8080805e;
  }
  & h4 {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1.1rem;
    font-weight: 600;
  }
  & p {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1rem;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
  }
  & span {
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    width: 40%;
  }
  &.active {
    background: #8080805e;
  }
`;
