import React, {FC, ReactNode} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 30px;
  border-bottom: 1px solid #BBB5B5;
`;

const Title = styled.p`
  font-size: 30px;
  line-height: 100%;
  margin-bottom: 15px;
  font-family: Roboto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.title === 'Параметры'  ? 'row' : 'column'};
`;

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