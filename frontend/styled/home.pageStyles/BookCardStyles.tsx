import styled from "styled-components";

export const BookCardContainer = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 15rem;
  background: #fff;
  display: flex;
  padding: 1rem 0.9375rem 0.8125rem 0.9375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  gap: 0.75rem;
  box-shadow: 1px 2px 10px black;
  transition:transform .2s;
  &:hover {
    transform:scale(1.1);

  }
`;

export const BookImageWarapper = styled.div`
  width: 100%;
  max-width: 12rem;
  height: 14rem;
  position: relative;
  align-items: center;
  aspect-ratio: 100/100;
`;

export const StyledBookTitleText = styled.p`
  color: #4d4d4d;
  font-family: Inter;
  width: 100%;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  line-height: 128.523%;
`;

export const StyeledBookWriterText = styled.p`
  color: #4d4d4d;
  font-family: Inter;
  font-size: 0.85rem;
  font-style: normal;
  width: 100%;
  font-weight: 600;
  line-height: 128.523%;
`;

export const StyledBookRatingText = styled.p`
  color: #4d4d4d;
  font-family: Inter;
  font-size: 0.8rem;
  font-style: normal;
  width: 100%;
  font-weight: 400;
  line-height: 128.523%;
  & span {
    color: #a7a7a7;
  }
`;