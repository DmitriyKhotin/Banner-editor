import React, {ChangeEvent, FC, ReactNode, useContext, useEffect} from "react"
import styled from "styled-components"
import {BannerContext} from "../../providers/BannerProvider";

const FieldWrapper = styled.div`
  border: 1px solid rgba(65, 46, 46, 0.32);
  border-radius: 9px;
  width: 190px;
  margin-right: 30px;
  margin-bottom: 9px;
  display: flex;
  justify-content: space-between;
  
  @media (max-height: 950px) {
    margin-right: 20px;
  }
  
  @media (max-height: 850px) {
    font-size: 24px;
  }
  
  @media (max-width: 900px) {
    width: 170px;
  }
}
`;

const FieldTitle = styled.p`
  margin: 9px 16px;
  font-size: 22px;
  min-width: max-content;
  line-height: 100%;
  
  @media (max-height: 950px) {
    margin: 5px 16px;
  }
  
  @media (max-width: 900px) {
    margin: 5px 8px;
  }
`;

const FieldInput = styled.input`
  border-radius: 9px;
  border: none;
  min-width: 70px;
  height: 100%;
  padding: 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
  text-align: end;
  
  @media (max-height: 950px) {
    padding: 5px 16px;
  }
  
  @media (max-width: 450px) and (max-height: 949px) {
    font-size: 18px;
  }
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
  border: none;
  border-radius: 9px;
  resize: none;
  padding: 9px 16px;
  font-size: 22px;
  line-height: 100%;
  outline: none;
  -moz-appearance: none;
  overflow: hidden;  
  
  @media (max-width: 450px) and (max-height: 949px) {
    font-size: 18px;
  }
`;

const ColorPicker = styled.div`
  height: 22px;
  width: 22px;
  border: 1px solid silver;
  margin-right: 17px;
  margin-top: 9px;
  background-color: ${props => props.color};
 
 @media (max-height: 950px) {
    margin-top: 5px;
  }
  
  @media (max-width: 900px) {
    margin-top: 5px;
  }
`;

interface Props {
  title: string
  setVisible?: () => void
  color?: string
  value?: string
  name?: string
}

const Field: FC<Props> = ({title, setVisible, color, value, name}) => {

  const banner = useContext(BannerContext)

  const setFile = (event: {target: HTMLInputElement}) => {
    const reader = new FileReader()
    reader.onload = function(event: {target: any}) {
      banner.setState({
        ...banner,
        imgs: [
          ...banner.imgs,
          {
            id: (new Date()).getTime().toString(),
            src: event.target.result,
            left: '50%',
            top: '50%'
          }
        ]
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const defaultKeyHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === 38)
      banner.setState({...banner, [name]: Number(value.slice(0, -2)) + 1 + 'px'})
    else if (event.keyCode === 40)
      banner.setState({...banner, [name]: Number(value.slice(0, -2)) - 1 + 'px'})
  }

  const dataURIKeyHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === 46 || event.keyCode === 8)
      banner.setState({
        ...banner,
        dataURI: {
          id: '',
          src: '',
          left: '',
          top: ''
        }})
  }

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
      case 'Текст':
        return <TextArea value={value} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => banner.setState({...banner, p: {...banner.p, [name]: event.target.value}})}/>
      // return <FieldInput type='text' value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => banner.setState({...banner, p: {...banner.p, [name]: event.target.value}})}/>
      case 'Цвет':
        return (
          <ColorPicker color={color} onClick={setVisible}/>
        )
      case 'dataURI':
        return <FieldInput type='text' value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => banner.setState({...banner, dataURI: {id: (new Date()).getTime().toString(), src: event.target.value, left: '50%', top: '50%'}})} onKeyDown={(event: React.KeyboardEvent) => dataURIKeyHandler(event)}/>
      default:
        return <FieldInput type='text' value={value.slice(0, -2)} onChange={(event: ChangeEvent<HTMLInputElement>) => banner.setState({...banner, [name]: event.target.value + 'px'})} onKeyDown={(event: React.KeyboardEvent) => defaultKeyHandler(event)}/>
    }
  }

  return (
    <FieldWrapper>
      <FieldTitle>
        {title}
      </FieldTitle>
      {getField()}
    </FieldWrapper>
  )
}

export default Field