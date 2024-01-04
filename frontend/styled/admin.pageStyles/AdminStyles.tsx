import styled from "styled-components";

export const AdminTopBarTextStyle = styled.h2`
  color: #314f8c;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  font-size: clamp(1.2rem, calc(1.2rem + ((1vw - 0.48rem) * 0.4167)), 1.5rem);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AdminTopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  background: #fff;
  box-shadow: 3px 3px 14px 8px rgba(0, 0, 0, 0.03);
  font-family: ${(props: any) => props.theme.fonts.$poppins};
  & button {
    display: flex;
    flex-direction: row;
    gap: 5px;
    background: #f00202;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 0.8rem;
  }
  & a {
    display: flex;
    flex-direction: row;
    gap: 5px;
    background: #f00202;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 0.8rem;
  }
`;
