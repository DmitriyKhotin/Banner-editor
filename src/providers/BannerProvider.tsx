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

const height = 450 > window.innerHeight ? window.innerHeight - 20 : 450
const width = 340 > window.innerWidth ? window.innerWidth - 20 : 340

const initialState: IBanner = {
  height: `${height}px`,
  width: `${width}px`,
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