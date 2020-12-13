import React, {FC, useCallback, useContext, useState} from "react"
import {SketchPicker} from "react-color";
import Cell from "./Cell";
import Field from "./Field";
import { BannerContext } from 'providers/BannerProvider'
import {PickerWrapper, RightColumn, Row, StyledWrapper} from "./styles";
import {BannerNames, BannerTitles, SettingTitles} from "../types";

interface Color {
  hex: object,
}

const BannerSettings: FC = () => {

  const [backgroundColorPickerVisible, setBackgroundColorPickerVisible] = useState(false)
  const banner = useContext(BannerContext)
  const [textColorPickerVisible, setTextColorPickerVisible] = useState(false)

  const setTextColorVisible = useCallback(() => setTextColorPickerVisible(prevState => !prevState), [])
  const setBackgroundColorVisible = useCallback(() => setBackgroundColorPickerVisible(prevState => !prevState), [])
  return (
    <StyledWrapper>
      <Cell title={SettingTitles.params}>
        <Field title={BannerTitles[BannerNames.height]} name={BannerNames.height} value={banner.height}/>
        <Field title={BannerTitles[BannerNames.width]} name={BannerNames.width} value={banner.width}/>
      </Cell>
      <Cell title={SettingTitles.images}>
        <Field title='Файл'/>
        <Field title={BannerTitles[BannerNames.dataURI]} name={BannerNames.dataURI} value={banner.dataURI.src}/>
      </Cell>
      <Cell title={SettingTitles.background}>
        <Row>
          <Field title='Цвет' setVisible={setBackgroundColorVisible} color={banner.backgroundColor}/>
          {
            backgroundColorPickerVisible &&
            <PickerWrapper>
              <SketchPicker color={banner.backgroundColor} onChangeComplete={(color: Color) => banner.setState({...banner, backgroundColor: color.hex})}/>
            </PickerWrapper>
          }
        </Row>
      </Cell>
      <Cell title={SettingTitles.font}>
        <Field title={BannerTitles[BannerNames.text]} name={BannerNames.text} value={banner.p.text}/>
        <RightColumn>
          <Field title={BannerTitles[BannerNames.fontSize]} name={BannerNames.fontSize} value={banner.fontSize}/>
          <Row>
            <Field title='Цвет' setVisible={setTextColorVisible} color={banner.color}/>
            {
              textColorPickerVisible &&
              <PickerWrapper>
                <SketchPicker color={banner.color} onChangeComplete={(color: Color) => banner.setState({...banner, color: color.hex})}/>
              </PickerWrapper>
            }
          </Row>
        </RightColumn>
      </Cell>
    </StyledWrapper>
  )
}

export default BannerSettings