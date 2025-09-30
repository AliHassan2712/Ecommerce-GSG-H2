import styled from "styled-components";

export const Select = styled.select`
background-color: transparent;
color: var(--whiteColor);
border: none;
padding: 4px;
font-size: 14px;
cursor: pointer;
outline: none;

//responsive Design
@media (max-width: 768px) {
    width: fit-content;
    font-size: 12px;
    
}


& option{
  background-color: ${({ theme }) => theme.colors.black};
    border: none;
    background-color: ${({ theme }) => theme.colors.black};
    &:hover{
    background-color: ${({ theme }) => theme.colors.black};
    }


}
`