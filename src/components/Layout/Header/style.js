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
  padding: 24px 0 12px;
  position: relative;
  

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }

  & li {
    margin-left: 25px;
  }

  & a {
    text-decoration: none;
    padding: 2px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    color: inherit;
    position: relative;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.gray};
    }
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
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
      z-index: 40;
    }
  }
`;
