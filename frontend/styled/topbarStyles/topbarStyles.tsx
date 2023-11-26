"use client";
import styled, { keyframes } from "styled-components";

export const StyledTopBarContainer = styled.div``;

export const StyledTopBarSearch = styled.input`
  border-radius: 40px;
  font-size: 1.25rem;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.7rem 2rem 0.7rem 1rem;
  background-image: url("./svg/searchOrange.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
`;

export const StyledTopBarDateWrapper = styled.div`
  border-radius: 40px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.7rem;
`;

export const StyledTopBarDateTimeText = styled.p`
  color: #4d4d4d;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1.35rem;
  font-style: normal;
  font-weight: 400;
  line-height: 128.523%; /* 19.278px */
  letter-spacing: -0.675px;
`;

export const StyledTopBarAvatarWrapper = styled.div`
  position: relative;
  align-items: center;
  height: 2.5rem;
  aspect-ratio: 100/100;
`;

export const StyledTopBarProfileWrapper = styled.div<{
  $isFloatingMenuOpen?: boolean;
}>`
  position: relative;
  cursor: pointer;
  border-radius: 33px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.7rem;
  & svg {
    transition: 0.5s ease-in-out;
    transform: ${(props) =>
      props.$isFloatingMenuOpen ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export const StyledTopBarProfileText = styled.p`
  color: #4d4d4d;
  max-width: 14ch;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const expandIn = keyframes`
  0% {
    transform: scale(0);
    transform-origin: top right;
  }
  100% {
    transform: scale(1);
    transform-origin: top right;
  }
`;

export const StyledFloatingMenuContainer = styled.div<{
  $isFloatingMenuOpen: boolean;
}>`
  display: ${(props: any) => (props.$isFloatingMenuOpen ? "flex" : "none")};
  padding: 10px;
  flex-direction: column;
  height: 130px;
  gap: 20px;
  position: absolute;
  bottom: -140px;
  left: 0;
  right: 0;
  width: 90%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 11px black;
  animation: ${expandIn} 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const StyledFloatingMenuItem = styled.div`
  gap: 10px;
  height: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  padding: 20px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & span {
    width: 100%;
    transition: all 0.2s ease-in-out;
  }
  & svg {
    transition: all 0.2s ease-in-out;
    width: 15%;
  }
  &:hover {
    background: #f27951c9;
    color: white;
    & svg {
      color: white;
    }
  }
`;
