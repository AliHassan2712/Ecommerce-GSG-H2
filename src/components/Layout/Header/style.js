import styled from "styled-components";

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
`;

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 16px 0px;
  position: relative;
  

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }

  & li {
    margin-left: 60px;
  }

  & a {
    text-decoration: none;
    padding: 2px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    color: inherit;
    position: relative;
    transition: all 0.3s;
  }

  & a.active::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid ${({ theme }) => theme.colors.black};
    opacity: 0.3;
  }

  @media (max-width: 991px) {
    & ul {
      display: none;
    }
    & ${WrapperDiv} {
      display: none;
    }
    & ul.open {
      display: flex;

      position: absolute;
      width: 100%;
      left: 0;
      top: 83px;
      background: ${({ theme }) => theme.colors.white};
      flex-direction: column;
      gap: 12px;
      padding: 16px 0px; 
      box-shadow: 0 0 6px 2px rgba(27, 27, 27, 0.08);
      z-index: 40;

      & li{
        margin: 0;
      }
    }

    
  }
`;
