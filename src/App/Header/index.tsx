import React, { FC } from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  font-weight: lighter;
  font-size: 44px;
  line-height: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
`;

const Header: FC<{}> = () => <StyledHeader>Avito - VAS</StyledHeader>

export default Header
