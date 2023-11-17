import styled from "styled-components";

const ProductBtnStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 3px;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  -webkit-tap-highlight-color: transparent;
  text-transform: uppercase;
`;
export const ProductAddBtnStyle = styled(ProductBtnStyle)`
  border: 1px solid #17b3bf;
  background: #deeaeb;
  color: #17b3bf;
`;

export const ProductDeleteBtnStyle = styled(ProductBtnStyle)`
  color: #e8505b;
  border-radius: 3px;
  border: 1px solid #e8505b;
  background: #ffeded;
`;

export const SearchFieldStyle = styled.input`
  width: 170px;
  height: 40px;
  padding: 5px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #ccc;
  color: #7f7f7f;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  outline: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border: 1px solid #17b3bf;
    color: black;
  }
`;

export const StyledSelectMenu = styled.select`
  height: 37px;
  width: 70px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #7f7f7f;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  &:focus {
    border: 1px solid #17b3bf;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  color: #314f8c;
  border-collapse: separate;
  border-spacing: 2px 0px;
  & thead {
    & th {
      background: #f4f4f4;
      text-align: left;
      height: 33px;
      padding-left: 30px;
      align-items: center;
      margin-right: 10px;
      color: #314f8c;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      @media screen and (max-width: 768px) {
        padding-left: 10px;
      }
    }
  }
  & tbody {
    & tr {
      position: relative;
      &:after {
        background: #ededed;
        content: "";
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        position: absolute;
      }
      & td {
        padding-left: 30px;
        height: 100px;
        @media screen and (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &.checked {
        background: rgba(137, 160, 205, 0.09);
      }
    }
  }
`;

export const ItemActionBtn = styled.button`
  max-width: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  & svg {
    width: 40px;
    height: 19.016px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledCheckBox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #314f8c;
`;

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

  & a {
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

export const ProductImageWrapper = styled.div`
  width: 100%;
  max-width: 80px;
  position: relative;
  aspect-ratio: 1/1;
`;
