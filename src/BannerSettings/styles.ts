import styled from "styled-components";

export const StyledWrapper = styled.div`
  border: 1px solid #BBB5B5;
  border-bottom: none; 
  
  @media (max-width: 835px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 835px) and (min-height: 925px) {
      width: 260px;
  }  
  
  @media (max-width: 750px) {
    width: 100%;
  }
   
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export  const PickerWrapper = styled.div`
  bottom: 50px;
  position: absolute;
  display: ${props => props.hidden ? 'none' : 'block'};
`;

export const RightColumn = styled.div`
`;