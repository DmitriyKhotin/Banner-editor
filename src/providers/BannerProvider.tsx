import React, {useState} from "react"
import {IBanner} from "types";

const height = 450 > window.innerHeight ? window.innerHeight - 20 : 450
const width = 340 > window.innerWidth ? window.innerWidth - 20 : 340

const initialState: IBanner = {
  height: height,
  width: width,
  imgs: [],
  dataURI: {
    id: '',
    src: '',
    left: 50,
    top: 50
  },
  backgroundColor: '#ffffff',
  p: {
    text: 'Некоторый текст',
    left: 20,
    top: 20
  },
  fontSize: 14,
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