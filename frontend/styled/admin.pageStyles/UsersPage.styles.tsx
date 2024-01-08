import styled from "styled-components";

export const UsersContainer = styled.div`
  background: #fff;
  width: 100%;
  padding: 30px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UsersSectionMenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 18px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: #6e6d6d;
  font-weight: 500;
  & li {
    cursor: pointer;
    position: relative;
    color: #314f8c;
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background: #314f8c;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      transition: width 0.3s ease-in-out;
    }
  }
`;

export const UsersStyledTable = styled.table`
  background: #fff;
  width: 100%;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: #6e6d6d;

  @media screen and (max-width: 768px) {
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
  }

  & tr {
    border-bottom: 1px solid #e5e7eb;
  }
  & th {
    font-weight: 500;
    padding: 10px;
    text-align: start;
    font-size: 1rem;
  }
  & td {
    padding: 20px 10px;
    text-align: start;
    font-weight: 400;
    font-size: 1rem;
    &.verified {
      color: green;
    }
    &.not-verified {
      color: red;
    }
    & button {
      padding: 10px 15px;
      border-radius: 20px;
      text-align: center;
      display: block;
      background: #ff000041;
      color: red;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
