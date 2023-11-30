import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
`;

export const BookDetailsImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #fff;
`;

export const RequestOwnerBtn = styled.button<{ $isApproved: boolean }>`
  font-size: 1.2rem;
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  border-radius: 5px;
  background: ${(props:any)=> props.$isApproved?"#08c60b":"#f7835e"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props:any)=> props.$isApproved?"#08c60b9e":"#f7845ea9"};
  }
`;

export const AboutAuthorTextStyle = styled.p`
  color: #f27851;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 128.523%;
  & span {
    color: #4d4d4d;
  }
`;

export const BookMenuItemP = styled.p`
  padding: 20px;
  color: #f27851;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background: #f27851;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const OverViewItemBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  padding: 10px 57px;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  flex: 1 0 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: #fff;
`;
