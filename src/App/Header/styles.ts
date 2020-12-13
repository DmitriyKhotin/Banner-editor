import styled from "styled-components"

export const StyledHeader = styled.p`
  font-weight: lighter;
  font-size: 44px;
  line-height: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  
  @media (max-height: 1050px) {
    margin-top: 25px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 650px) {
    margin-top: 20px;
  }
  
  @media (max-width: 520px) {
    font-size: 35px;
  }
  
  @media (max-width: 265px) {
    font-size: 25px;
  }
`;