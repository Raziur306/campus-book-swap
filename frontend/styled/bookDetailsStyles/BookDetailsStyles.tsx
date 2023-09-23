import styled from "styled-components";

export const BookDetailsImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 25/30;
  border-radius: 10px;
  background: #fff;
`;

export const RequestOwnerBtn = styled.button`
  font-size: 1.2rem;
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  border-radius: 5px;
  background: #f27851;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #f7835e;
  }
`;

export const AboutAuthorTextStyle = styled.p`
  color: #f27851;
  font-family: Inter;
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
  cursor:pointer;
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
width:100%;
max-width:300px;
display: flex;
padding: 10px 57px;
flex-direction: column;
align-items: center;
gap: 3px;
flex: 1 0 0;
border-radius: 5px;
border: 1px solid #DDD;
background: #FFF;
`;
