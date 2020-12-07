import React, {FC} from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 170px;
  font-size: 30px;
  line-height: 100%;
  padding: 15px 0;
  font-family: Roboto;
  border-radius: 15px;
  background-color: ${props => props.color};
  border: 1px solid #412E2E;
  text-align: center;
  
  &:focus {
  outline: none;
`;

interface Props {
  onClick: () => void
  text: string
  color: string
}

const Button: FC<Props> = ({text, onClick, color}) => {

  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  )
}

export default Button

