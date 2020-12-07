import React, { FC, useEffect, useState} from "react"
import styled from "styled-components"
import Cell from "./Cell";
import Field from "./Field";
import {SketchPicker} from "react-color";
import {useInput} from './hooks'
const StyledWrapper = styled.div`
  border: 1px solid #BBB5B5;
  width: 500px;
  border-bottom: none; 
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const PickerWrapper = styled.div`
  bottom: 10px;
  right: 5px;
  position: absolute;
  display: ${props => props.hidden ? 'none' : 'block'};
`;

let banner: any
let bckgDisplayer: any
let p: any

const BannerSettings: FC<{}> = () => {

  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [backgroundColorPickerVisible, setBackgroundColorPickerVisible] = useState(true)

  const [textColor, setTextColor] = useState('#000')
  const [textColorPickerVisible, setTextColorPickerVisible] = useState(true)

  const fontSize = useInput('14')
  const text = useInput('Некоторый текст...')
  const height = useInput('450')
  const width = useInput('340')

  const updateBckgVisible = (): void => {
    setBackgroundColorPickerVisible((prevState: boolean) => !prevState)
  }

  const updateTextVisible = (): void => {
    setTextColorPickerVisible((prevState: boolean) => !prevState)
  }

  useEffect(() => {
    banner = document.getElementById('banner')
    bckgDisplayer = document.getElementById('bckg_displayer')
    p = document.createElement('p')
    p.style.position = 'absolute'
    p.style.bottom = '20px'
    p.style.left = '30px'
    p.append(text.value)
    console.log('banner', banner)
    console.log('p', p.textContent)
    banner.appendChild(p)
    banner.style.color = textColor
    p.style.fontSize = fontSize.value
    p.style.color = textColor
    banner.style.height = height.value + 'px'
    banner.style.width = width.value + 'px'
  }, [])

  useEffect(() => {
    if (banner) {
      banner.style.backgroundColor = backgroundColor
    }
  }, [backgroundColor])

  useEffect(() => {
    if (banner) {
      banner.style.color = textColor
    }
  }, [textColor])

  useEffect(() => {
    if (p)
      p.style.fontSize = fontSize.value + 'px'
  }, [fontSize.value])

  useEffect(() => {
    if (p)
      p.textContent = text.value
  }, [text.value])

  useEffect(() => {
    if (p)
      p.style.color = textColor
  }, [textColor])

  useEffect(() => {
    console.log('banner', banner)
    if (banner) {
      console.log(banner.style.height)
      banner.style.height = height.value + 'px'
      console.log(banner.style.height)
    }
    console.log('changed height')
  }, [height.value])

  useEffect(() => {
    if (banner)
      banner.style.width = width.value + 'px'
    console.log('change width')
  }, [width.value])

  return (
    <StyledWrapper>
      <Cell title={'Параметры'}>
        <Field title='Высота' {...height}/>
        <Field title='Ширина' {...width}/>
      </Cell>
      <Cell title={'Картинка'}>
        <Field title='Файл'/>
        <Field title='dataURI'/>
      </Cell>
      <Cell title={'Фон'}>
        <Row>
          <Field title='Цвет' setVisible={updateBckgVisible} color={backgroundColor}/>
          {
            backgroundColorPickerVisible &&
              <PickerWrapper>
                <SketchPicker color={backgroundColor} onChangeComplete={(color: any) => setBackgroundColor(color.hex)}/>
              </PickerWrapper>
          }
        </Row>
      </Cell>
      <Cell title={'Шрифт'}>
        <Field title='Текст' {...text}/>
        <Field title='Размер' {...fontSize}/>
        <Row>
          <Field title='Цвет' setVisible={updateTextVisible} color={textColor}/>
          {
            textColorPickerVisible &&
            <PickerWrapper>
              <SketchPicker color={textColor} onChangeComplete={(color: any) => setTextColor(color.hex)}/>
            </PickerWrapper>
          }
        </Row>
      </Cell>
    </StyledWrapper>
  )
}

export default BannerSettings