import styled from "styled-components";

export const Select = styled.select`
background-color: transparent;
color: var(--whiteColor);
border: none;
padding: 4px;
font-size: 14px;
cursor: pointer;
outline: none;
width: 78px;
height: 24px;

//responsive Design
@media (max-width: 768px) {
    width: fit-content;
    font-size: 12px;
    
}


& option{
    color: var(--whiteColor);
    border: none;
    background-color:var(--blackColor) ; 
    &:hover{
    background-color: var(--blackColor);
    }


}
`