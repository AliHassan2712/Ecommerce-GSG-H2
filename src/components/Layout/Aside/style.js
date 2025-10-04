import styled from "styled-components";

export const StyleAside = styled.aside`
    /* Make aside take full height of its parent (MainSection) so we can distribute items */
    height: 100%;
    display: flex;
    align-items: stretch;
    
    @media (max-width: 768px) {
        display: none;
    }

`

export const StyleDiv = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    gap: 16px;
    flex: 1 1 auto; /* take full height of aside */
    justify-content: space-between; /* distribute items across the height */
`