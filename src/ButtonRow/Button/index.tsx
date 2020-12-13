import React, {FC} from "react"
import {StyledButton} from "./styles";

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

