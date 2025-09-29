import styled from "styled-components";

export const WrapperDiv = styled.div`
background-color: var(--blackColor);
color: var(--whiteColor);
padding: 4px;
`
export const FlexDiv = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding: 12px;


//responsive Design
@media (max-width: 768px) {
  text-align: center;
  align-items:center;
  gap: 10px;
  }`


