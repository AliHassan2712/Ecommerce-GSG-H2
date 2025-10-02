import styled from "styled-components";

export const CircleButtonStyled = styled.button`
width: 46px;
height: 46px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
border: none;
cursor: pointer;
`



export const ButtonStyled = styled.button`
background-color: ${({ theme }) => theme.colors.secondary};
padding: 16px 48px;
color: ${({ theme }) => theme.colors.white};
border: none;
outline: none;
border-radius: 4px;
cursor: pointer;
`