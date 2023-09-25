import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

export const StyledProfileMenuUl = styled.ul`
  & li {
    color: #717b8c;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
    padding-bottom: 10px;
    &:after {
      content: "";
      width: 0%;
      height: 2px;
      bottom: 0;
      position: absolute;
      left: 0;
      background: #f4683c;
      transition: 0.7s ease-in-out;
    }
    &.active {
      color: #f4683c;
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        bottom: 0;
        position: absolute;
        left: 0;
        background: #f4683c;
        transition: 0.7s ease-in-out;
      }
      &:hover {
        color: #f4683c;
      }
    }
    &:hover {
      color: #ffbfab;
    }
  }
`;
