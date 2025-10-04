import styled from "styled-components";

export const StyleDiv = styled.div`
width: 243px;
height: 38px;
background: #F5F5F5;
padding: 5px;
display: flex;
align-items: center;
justify-content: space-between;

& input{
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 15px;

    &::placeholder{
            font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        color: var(--blackColor);
        opacity: 0.5;
    }
}


`