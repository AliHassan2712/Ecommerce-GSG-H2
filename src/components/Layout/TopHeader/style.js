import styled from "styled-components";

export const WrapperDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
padding: 4px;
`
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`


