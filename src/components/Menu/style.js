import styled from "styled-components";

export const Select = styled.select`
background-color: transparent;
color: var(--whiteColor);
border: none;
padding: 4px;
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
cursor: pointer;
outline: none;
width: 78px;

//responsive Design
@media (max-width: 768px) {
    width: fit-content;
            font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    
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