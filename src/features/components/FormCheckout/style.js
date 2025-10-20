import styled from "styled-components";

export const InputStyles = styled.input`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  border-radius: 4px;
  font-size: 16px;
  width: 470px;
  height: 50px;
  border: none;
  outline: none;
  margin: 8px 0;
`;

export const LabelStyles = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`;

export const RequiredMark = styled.span`
  color: red;
  font-weight: bold;
  font-size: 18px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
  }

  &:checked::after {
    content: "✔";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    font-size: 14px;
    line-height: 1;
  }
`;
