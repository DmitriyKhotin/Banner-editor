import React, {FC} from "react"

const BannerView: FC<{}> = () => {
  const style = {
    'border': '1px solid #412E2E',
    'borderRadius': '40px'
  }
  return (
    <div style={{...style, position: 'relative'}} id='banner'/>
  )
}

export default BannerView