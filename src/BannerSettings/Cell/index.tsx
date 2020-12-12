import React, {FC, ReactNode} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 30px;
  border-bottom: 1px solid #BBB5B5;
  
  @media (max-height: 1050px) {
    padding: 20px;
  }
  
  @media (max-width: 450px) and (max-height: 949px) {
    padding: 15px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  line-height: 100%;
  margin-bottom: 15px;
  font-family: Roboto;
  
  @media (max-height: 950px) {
    font-size: 28px;
  }
  
  @media (max-width: 450px) and (max-height: 949px) {
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  
  @media (max-width: 835px) and (min-height: 925px) {
    flex-direction: column;
  }
  
  @media (max-width: 750px) {
    flex-direction: row;
  }
 
  @media (max-width: 520px) {
    flex-direction: column;
  }
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