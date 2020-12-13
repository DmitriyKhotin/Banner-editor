import React, {ChangeEvent, FC, ReactNode, useContext} from "react"
import {BannerContext} from "providers/BannerProvider";
import {ColorPicker, FieldInput, FieldTitle, FieldWrapper, FileInput, FileLabel, TextArea} from "./styles";

interface Props {
  title: string
  setVisible?: () => void
  color?: string
  value?: number
  name?: string
}

const Field: FC<Props> = ({title, setVisible, color, value, name}) => {

  const {setState, ...banner} = useContext(BannerContext)

  const setFile = (event: {target: HTMLInputElement}) => {
    const reader = new FileReader()
    reader.onload = (event: ProgressEvent<FileReader>) => {
      setState({
        ...banner,
        imgs: [
          ...banner.imgs,
          {
            id: (new Date()).getTime().toString(),
            src: event.target.result,
            left: 50,
            top: 50
          }
        ]
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const is_valid = (value: string) => (value && value[0] !== '-' && value !== '0')

  const defaultKeyHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === 38 && is_valid((value + 1).toString()))
      setState({...banner, [name]: value + 1})
    else if (event.keyCode === 40 && is_valid((value - 1).toString()))
      setState({...banner, [name]: value - 1})
  }

  const dataURIKeyHandler = (event: {keyCode: number}) => {
    if (event.keyCode === 46 || event.keyCode === 8)
      setState({
        ...banner,
        dataURI: {
          id: '',
          src: '',
          left: 0,
          top: 0
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
        return <TextArea value={value} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setState({...banner, p: {...banner.p, [name]: event.target.value}})}/>
      case 'Цвет':
        return (
          <ColorPicker color={color} onClick={setVisible}/>
        )
      case 'dataURI':
        return <FieldInput type='text' value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => setState({...banner, dataURI: {id: (new Date()).getTime().toString(), src: event.target.value, left: 50, top: 50}})} onKeyDown={(event: React.KeyboardEvent) => dataURIKeyHandler(event)}/>
      default:
        return <FieldInput type='text' value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => {is_valid(event.target.value) ? setState({...banner, [name]: event.target.value}) : null}} onKeyDown={(event: React.KeyboardEvent) => defaultKeyHandler(event)}/>
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