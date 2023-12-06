import styled from "styled-components";

export const BooksInDetailsTable = styled.table`
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
      &.pending {
        background: #ff8c003d;
        color: #ff8c00e4;
        cursor: pointer;
        cursor: pointer;
      }
      &.view {
        background: #2b00ff3f;
        color: #2b00ff;
        cursor: pointer;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.reject {
        background: #ffbb0041;
        color: #ffbb00ca;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.delete {
        background: #ff000041;
        color: red;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.approve {
        background: #00800031;
        color: green;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
