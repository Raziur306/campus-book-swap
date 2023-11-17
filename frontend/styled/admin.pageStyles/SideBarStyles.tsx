import styled from "styled-components";

const SideBarMenuItemStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 10px;
  & span {
    color: #314f8c;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const MenuItemWrapper = styled(SideBarMenuItemStyle)`
  &.active {
    border-radius: 0.1875rem;
    background: #f0f0f0;
  }
  &:hover {
    background: #f0f0f0;
  }
`;

export const MenuItemLogoutStyle = styled(SideBarMenuItemStyle)`
  border-radius: 0.1875rem;
  & span {
    color: #e8505b;
  }
  &:hover {
    background: #ffeded;
  }
`;

export const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 25px 0 25px 10px;
  position: relative;
  & span {
    color: #314f8c;
    text-align: center;
    font-family: ${(props: any) => props.theme.fonts.$poppins};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:after {
    content: "";
    width: 100%;
    left: 0;
    background: #d1d3d4;
    height: 1px;
    position: absolute;
    bottom: 0;
  }
`;
