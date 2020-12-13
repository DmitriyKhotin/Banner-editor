import React, { FC } from 'react'
import { GlobalStyle, StyledWrapper } from './styles'
import Header from "./Header";
import ButtonsRow from "../ButtonRow";
import BannerSettings from "../BannerSettings";
import BannerView from "../BannerView";
import BannerProvider from 'providers/BannerProvider'

const App: FC = () => {
  return (
    <BannerProvider>
      <GlobalStyle/>
      <Header/>
      <ButtonsRow/>
      <StyledWrapper>
        <BannerSettings/>
        <BannerView/>
      </StyledWrapper>
    </BannerProvider>
  )
}

export default App