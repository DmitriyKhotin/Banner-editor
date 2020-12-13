import styled from "styled-components";

export const FieldWrapper = styled.div`
  border: 1px solid rgba(65, 46, 46, 0.32);
  border-radius: 9px;
  width: 190px;
  margin-right: 30px;
  margin-bottom: 9px;
  display: flex;
  justify-content: space-between;
  
  @media (max-height: 950px) {
    margin-right: 20px;
  }
  
  @media (max-height: 850px) {s
    font-size: 24px;
  }
  
  @media (max-width: 900px) {
    width: 170px;
  }
}
`;

export const FieldTitle = styled.p`
  margin: 9px 16px;
  font-size: 22px;
  min-width: max-content;
  
  @media (max-height: 950px) {
    margin: 5px 16px;
  }
  
  @media (max-width: 900px) {
    margin: 5px 8px;
  }
`;

export const FieldInput = styled.input`
  border-radius: 9px;
  border: none;
  min-width: 70px;
  height: 100%;
  padding: 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
  text-align: end;
  
  @media (max-height: 950px) {
    padding: 5px 16px;
  }
  
  @media (max-width: 450px) and (max-height: 949px) {
    font-size: 18px;
  }
`;

export const FileInput = styled(FieldInput)`
  display: none; 
`;

export const FileLabel = styled.label`
  font-size: 37px;
  line-height: 100%;
  display: flex;
  align-items: center;
  margin-right: 17px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 9px;
  resize: none;
  padding: 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
  -moz-appearance: none;
  overflow: hidden;  
  
  @media (max-width: 450px) and (max-height: 949px) {
    font-size: 18px;
  }
`;

export const ColorPicker = styled.div`
  height: 22px;
  width: 22px;
  border: 1px solid silver;
  margin-right: 17px;
  margin-top: 9px;
  background-color: ${props => props.color};
 
 @media (max-height: 950px) {
    margin-top: 6px;
  }
  
  @media (max-width: 900px) {
    margin-top: 5px;
  }
`;