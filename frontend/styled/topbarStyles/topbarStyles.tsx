import styled from "styled-components";

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
  font-family: Headland One;
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
  $isProfileActive?: String;
}>`
  cursor: pointer;
  border-radius: 33px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.7rem;
  & svg {
    transition: 0.5s ease-in-out;
    transform: ${(props) =>
      props.$isProfileActive=='/profile' ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export const StyledTopBarProfileText = styled.p`
  color: #4d4d4d;
  max-width: 14ch;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
