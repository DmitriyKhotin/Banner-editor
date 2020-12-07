import React, {FC} from "react"
import styled from "styled-components"
import Button from "./Button";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 150px;
  margin-bottom: 40px;
`;

const ButtonsRow: FC<{}> = () => {
  return (
    <ButtonWrapper>
      <Button text='.png' onClick={() => alert('.png')} color='#a273f7'/>
      <Button text='.html' onClick={() => alert('.html')} color='#eb5c60'/>
      <Button text='.json' onClick={() => alert('.json')} color='#97cf26'/>
    </ButtonWrapper>
  )
}

export default ButtonsRow