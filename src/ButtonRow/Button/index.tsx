import React, {FC} from "react"
import styled from "styled-components"

const StyledButton = styled.button`
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
`;

interface Props {
  onClick: () => void
  text: string
}

const Button: FC<Props> = ({text, onClick}) => {

  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button

