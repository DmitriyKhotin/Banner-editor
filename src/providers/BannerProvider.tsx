import React, {useEffect, useState} from "react"

export interface Image {
  id: string
  src: string
  left: string
  top: string
}

interface IBanner {
  height: string
  width: string
  imgs: Image[]
  dataURI: Image
  backgroundColor: string
  p: {
    text: string,
    left: string
    top: string
  }
  fontSize: string
  color: string
}

const initialState: IBanner = {
  height: '450px',
  width: '340px',
  imgs: [],
  dataURI: {
    id: '',
    src: '',
    left: '50%',
    top: '50%'
  },
  backgroundColor: '#ffffff',
  p: {
    text: 'Некоторый текст',
    left: '20px',
    top: '20px'
  },
  fontSize: '14px',
  color: '#000000'
}

interface Props {
  children: React.ReactNode
}

export const BannerContext = React.createContext(null)

const BannerProvider: React.FC<Props> = ({children}) => {
  const [state, setState] = useState<IBanner>(initialState)

  return (
    <BannerContext.Provider value={{...state, setState}}>
      {children}
    </BannerContext.Provider>
  )
}

export default BannerProvider