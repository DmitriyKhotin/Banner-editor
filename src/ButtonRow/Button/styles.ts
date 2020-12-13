import styled from "styled-components"

export const StyledButton = styled.button`
  width: 170px;
  font-size: 30px;
  line-height: 100%;
  padding: 15px 0;
  font-family: Roboto;
  border-radius: 35px;
  background-color: #d6d6d4;
  border: 1px solid #756969;
  text-align: center;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer;
  }
  
  @media (max-width: 1050px) {
    width: 150px;
  }
  
  @media (max-width: 850px) {
    width: 135px;
    font-size: 25px;
  }
  
  @media (max-width: 850px) {
    width: 110px;
    padding: 10px 0;
  }
 
 @media (max-width: 480px) {
    width: 90px;
    padding: 7px 0;
    font-size: 22px;
  }
  
  @media (max-width: 340px) {
    width: 70px;
    padding: 5px 0;
    font-size: 18px;
  }
  
  @media (min-width: 1051px) and (max-height: 1050px) {
    width: 160px;
    font-size: 28px;
    padding: 10px 0;
  }
  
  @media (min-width: 1051px) and (max-height: 950px) {
    width: 140px;
    padding: 5px 0;
  }
 
`;