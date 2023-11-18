import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  color: #314f8c;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 33px;
    &.active {
      flex-shrink: 0;
      border-radius: 3px;
      background: #314f8c;
      color: #fff;
    }
    &.disabled {
      pointer-events: none;
    }
  }
`;
