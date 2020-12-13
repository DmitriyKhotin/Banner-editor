import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
  
  #app {
    padding: 0 152px;
  }
  
  @media (max-width: 1280px) {
    #app {
      padding: 0 115px;
    }
  }
  
  @media (max-width: 1200px) {
    #app {
      padding: 0 80px;
    }
  }
  
  @media (max-width: 1080px) {
    #app {
      padding: 0 45px;
    }
  }
    
  @media (max-width: 950px) {
    #app {
      padding: 0 20px;
    }
    
    @media (max-width: 835px) and (min-height: 925px) {
      #app {
        padding: 0 40px;
      }
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 835px) and (max-height: 924px) {
    flex-direction: column;
  }
  
  @media (max-width: 750px) {
    flex-direction: column;
  }
  
`;