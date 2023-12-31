import styled from "styled-components";

export const BookCardContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  overflow: hidden;
  gap: 0.75rem;
  box-shadow: 1px 2px 10px #00000065;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const BookImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  aspect-ratio: 1/1;
`;

export const StyledBookTitleText = styled.p`
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  width: 100%;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  line-height: 128.523%;
`;

export const StyledBookWriterText = styled.p`
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 0.85rem;
  font-style: normal;
  width: 100%;
  font-weight: 600;
  line-height: 128.523%;
`;

export const StyledInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #4d4d4d;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 0.8rem;
  font-style: normal;
  width: 100%;
  font-weight: 400;
  line-height: 128.523%;
  & span {
    color: #5e5c5c;
  }
  & .free {
    color: #fff;
    background: #0aba0a;
    padding: 5px;
    border-radius: 5px;
  }
  & .price {
    padding: 5px;
  }
`;
