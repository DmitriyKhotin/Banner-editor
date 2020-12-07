import React, {FC, ReactNode, SetStateAction, useEffect, useRef} from "react"
import styled from "styled-components"

const FieldWrapper = styled.div`
  border: 1px solid rgba(65, 46, 46, 0.32);
  border-radius: 9px;
  width: 190px;
  margin-right: 30px;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const FieldTitle = styled.p`
  margin: 9px 16px 9px 16px;
  display: flex;
  align-items: center;
  font-size: 22px;
  min-width: max-content;
  line-height: 100%;
`;

const FieldInput = styled.input`
  border-radius: 9px;
  border: none;
  min-width: 70px;
  height: 100%;
  padding: 9px 16px 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
`;

const FileInput = styled(FieldInput)`
  display: none; 
`;

const FileLabel = styled.label`
  font-size: 37px;
  line-height: 100%;
  display: flex;
  align-items: center;
  margin-right: 17px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 9px;
  height: max-content;
  resize: none;
  padding: 9px 16px 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
  -moz-appearance: none;
`;

const ColorPicker = styled.div`
  height: 22px;
  width: 22px;
  border: 1px solid silver;
  margin-right: 17px;
  background-color: ${props => props.color}
`;

interface Props {
  title: string
  setVisible?: () => void
  color?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Field: FC<Props> = ({title, setVisible, color, value, onChange}) => {

  const option = useRef<HTMLInputElement>()

  const setFile = (event: {target: HTMLInputElement}) => {
    const img = document.createElement('img')
    img.style.position = 'absolute'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%, -50%)'
    const reader = new FileReader()
    reader.onload = function(event: {target: any}) {
      img.setAttribute('src', event.target.result);
      const banner = document.getElementById('banner')
      banner.appendChild(img);
    }
    reader.readAsDataURL(event.target.files[0])
  }

  useEffect(() => {
    console.log('render')
  })

  const getField = (): ReactNode =>  {
    switch (title) {
      case 'Файл':
        return (
          <>
          <FileLabel htmlFor={'fileInput'}>
            +
          </FileLabel>
          <FileInput id='fileInput' type='file' multiple accept='image/*' onChange={setFile}/>
        </>
        );
      // case 'Текст':
      //   return <TextArea value={value} onChange={(event) =>  onChange(event)}/>
      case 'Цвет':
        return (
          <ColorPicker color={color}/>
        )
      default:
        return <FieldInput type='text' value={value} onChange={onChange}/>
    }
  }

  // useEffect(() => {
  //
  // }, [option.current.focus])

  return (
    <FieldWrapper onClick={setVisible}>
      <FieldTitle>
        {title}
      </FieldTitle>
      {getField()}
    </FieldWrapper>
  )
}

export default Field