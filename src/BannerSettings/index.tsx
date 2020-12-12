import React, {FC, useContext, useState} from "react"
import styled from "styled-components"
import Cell from "./Cell";
import Field from "./Field";
import {SketchPicker} from "react-color";
import { BannerContext } from '../providers/BannerProvider'

const StyledWrapper = styled.div`
  border: 1px solid #BBB5B5;
  border-bottom: none; 
  
  @media (max-width: 835px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 835px) and (min-height: 925px) {
      width: 260px;
  }  
  
  @media (max-width: 750px) {
    width: 100%;
  }
   
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const PickerWrapper = styled.div`
  bottom: 50px;
  position: absolute;
  display: ${props => props.hidden ? 'none' : 'block'};
`;

const RightColumn = styled.div`
`;

const BannerSettings: FC<{}> = () => {

  const [backgroundColorPickerVisible, setBackgroundColorPickerVisible] = useState(false)
  const banner = useContext(BannerContext)
  const [textColorPickerVisible, setTextColorPickerVisible] = useState(false)

  return (
    <StyledWrapper>
      <Cell title={'Параметры'}>
        <Field title='Высота' name='height' value={banner.height}/>
        <Field title='Ширина' name='width' value={banner.width}/>
      </Cell>
      <Cell title={'Картинка'}>
        <Field title='Файл'/>
        <Field title='dataURI' name='dataURI' value={banner.dataURI.src}/>
      </Cell>
      <Cell title={'Фон'}>
        <Row>
          <Field title='Цвет' setVisible={() => setBackgroundColorPickerVisible(prevState => !prevState)} color={banner.backgroundColor}/>
          {
            backgroundColorPickerVisible &&
              <PickerWrapper>
                <SketchPicker color={banner.backgroundColor} onChangeComplete={(color: any) => banner.setState({...banner, backgroundColor: color.hex})}/>
              </PickerWrapper>
          }
        </Row>
      </Cell>
      <Cell title={'Шрифт'}>
        <Field title='Текст' name='text' value={banner.p.text}/>
        <RightColumn>
          <Field title='Размер' name='fontSize' value={banner.fontSize}/>
          <Row>
            <Field title='Цвет' setVisible={() => setTextColorPickerVisible(prevState => !prevState)} color={banner.color}/>
            {
              textColorPickerVisible &&
              <PickerWrapper>
                <SketchPicker color={banner.color} onChangeComplete={(color: any) => banner.setState({...banner, color: color.hex})}/>
              </PickerWrapper>
            }
          </Row>
        </RightColumn>
      </Cell>
    </StyledWrapper>
  )
}

export default BannerSettings