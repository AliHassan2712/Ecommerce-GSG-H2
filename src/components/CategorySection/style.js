import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 60px 0px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0px 70px ;

  gap: 0px 30px;

  @media (max-width:767px){
    flex-wrap:wrap;
    gap:30px;
  }
`;
