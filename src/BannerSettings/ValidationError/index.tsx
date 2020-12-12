import React from 'react'
import styled from "styled-components"

const ErrorMessage = styled.span`
  position: absolute;
  margin-top: 50px;
  color: red;
`;
interface Props {
  value: string
}

const ValidationError: React.FC<{value: string}> = ({value}) => {
  if (value.length === 2)
    return <ErrorMessage>Поле не должно быть пустым!</ErrorMessage>
  else if (value[0] === '-')
    return <ErrorMessage>Поле не должно быть отрицательным!</ErrorMessage>
  else return <></>
}

export default ValidationError