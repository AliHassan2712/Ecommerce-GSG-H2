import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
padding: 12px;
padding-top: 24px;

    & ul{
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
    }
    & li{
        margin-left:25px;   
    }

    & a{
        text-decoration: none;
        padding: 2px;
        font-weight: 400;
        color: inherit;
        position: relative;
    }

    & a.active::after{
        content: "";
        position: absolute;
        width: 100%;
        margin: auto;
        height: 1px;
        background-color: var(--blackColor);
        left: 0;
        bottom: 0;

        @media (max-width: 991px) {
         display:none ;
        }
    }

    //responsive Screen

    @media (max-width: 991px) {
  
    
}


`

export const WrapperDiv = styled.div`
display:flex;
align-items: center;
gap: 0px 30px;

`