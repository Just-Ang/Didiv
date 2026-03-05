import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0;
`;

export const InputsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PriceInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;

export const Divider = styled.span`
  display: flex;
  align-items: center;
  color: #999;
`;

export const Track = styled.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({ background }) => background};
`;

export const Thumb = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;