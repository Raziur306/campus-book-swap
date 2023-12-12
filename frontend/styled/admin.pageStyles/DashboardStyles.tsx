import styled from "styled-components";

export const DashboardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px;
  border-radius: 6px;
  gap: 30px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  cursor: pointer;
  box-shadow: 0px 4px 7px rgba(6, 22, 33, 0.13),
    0px 13px 22px rgba(0, 30, 43, 0.12);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  & h2 {
    color: #314f8c;
    font-size: clamp(1.2rem, calc(1.2rem + ((1vw - 0.48rem) * 0.4167)), 1.5rem);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & h4 {
    color: #555151;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & h3 {
    color: #314f8c;
    font-size: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.3472)), 1.25rem);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & h5 {
    color: #555151;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const DashboardCardStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  &.down {
    & svg {
      transform: rotate(180deg);
      & path {
        fill: #e8505b;
        stroke: #e8505b;
      }
    }
  }
`;

export const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 25px;
  border-radius: 6px;
  box-shadow: 0px 4px 7px rgba(6, 22, 33, 0.13),
    0px 13px 22px rgba(0, 30, 43, 0.12);
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  cursor: pointer;
  gap: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  & h2 {
    color: #263238;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 15px;
  }
`;

export const LargeCardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  & p {
    color: #7f7f82;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & span {
    font-weight: bold;
  }
  & h3 {
    color: #263238;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
    padding-left: 15px;
    &:after {
      width: 10px;
      height: 10px;
      content: "";
      background: #d9d9d9;
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    &.active {
      &:after {
        background: #e8505b;
      }
    }
  }
  & h4 {
    color: #263238;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const RecentUserWrapper = styled.div<{ $isLastItem: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-bottom: 10px;
  & h4 {
    color: #7f7f82;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & span {
    color: #263238;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &:after {
    display: ${(props: any) => (props.$isLastItem ? "none" : "block")};
    content: "";
    position: absolute;
    width: 100%;
    height: 0.4px;
    background: #b6bebe;
    bottom: 0;
  }
`;
