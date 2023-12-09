import styled from "styled-components";

export const PendingAndRequestPageContainer = styled.div`
  background: #fff;
  width: 100%;
  padding: 30px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PendingPageMenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 18px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: #6e6d6d;
  font-weight: 500;
  & li {
    cursor: pointer;
    position: relative;
    &.active {
      color: #fa7c54;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      width: 0;
      height: 2px;
      background: #fa7c54;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      transition: width 0.3s ease-in-out;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;

export const ContributionStyledTable = styled.table`
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
    font-weight: 400;
    font-size: 1rem;
    & span {
      padding: 6px 10px;
      border-radius: 20px;
      text-align: center;
      display: block;
      width: 113px;
      &.Completed {
        background: #00800031;
        color: green;
        cursor: pointer;
      }
      &.action {
        background: #ff000041;
        color: red;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.Pending {
        color: #ff8c00e4;
      }
      &.Rejected {
        color: #9a0000e2;
      }
      &.Approved {
        color: #228105e2;
      }
      &.view {
        background: #00800031;
        color: green;
        cursor: pointer;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.rejected {
        background: #ff000089;
        color: #ff0f0f;
        cursor: pointer;
      }
      &.delete {
        background: #d904045a;
        color: #d90000;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
