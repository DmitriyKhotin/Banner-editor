import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  margin-bottom: 40px;
  
  @media (max-width: 850px) {
    padding: 0 80px;
  }
  
  @media (max-width: 700px) {
    padding: 0 30px;
  }
  
  @media (max-width: 480px) {
    padding: 0;
  }
  
  @media (max-height: 950px) {
    margin-bottom: 25px;
  }
 
`;