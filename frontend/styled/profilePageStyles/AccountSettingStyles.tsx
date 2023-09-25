import styled from "styled-components";

export const SettingsCardWrapper = styled.div`
  padding: 1.77rem 1.88rem 1.7rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.8s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledSettingInputLabel = styled.label`
  color: #4c535f;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 112.4%;
`;
export const StyledSettingsTextField = styled.input`
  height: 100%;
  min-height: 52px;
  padding: 16px;
  border-radius: 8px;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid #dcd9d9;
  background:${props=>(props.disabled?'#fff' :'#8D98AA')}
  color: #4d4d4d;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const StyledSettingsBioTextArea = styled.textarea`
  min-height: 158px;
  padding: 16px;
  border-radius: 8px;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid #dcd9d9;
  background:${props=>(props.disabled?'#fff' :'#8D98AA')}
  color: #4d4d4d;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  resize:none;
`;

export const StyledProfileUpdateBtn = styled.button`
  width: 201px;
  height: 49px;
  flex-shrink: 0;
  color: #fff;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 8px;
  background: #f4683c;
  transition: 0.7s ease-in-out;
  &:hover {
    background: #ff8761;
  }
`;

export const AccountEditPenWrapper = styled.div`
  padding: 20px;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(225, 225, 225, 0.64);
  transition:0.7s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
