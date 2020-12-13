import React, {FC, ReactNode} from "react"
import {Container, Title, Wrapper} from "./styles";


interface Props {
  title: string
  children: ReactNode
}

const Cell: FC<Props> = ({title, children}) => {
  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      <Container title={title}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Cell