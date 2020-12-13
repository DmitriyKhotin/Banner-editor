import React, { FC, useContext, useRef} from "react"
import {BannerContext, Image} from "providers/BannerProvider";

interface Coords {
  x: number
  y: number
}

type Elem = 'dataURI' | 'image' | 'text'

const BannerView: FC = () => {
  const banner = useContext(BannerContext)
  const bannerRef = useRef<HTMLDivElement>()

  const getBannerCoords = (): Coords => {
    return {
      x: bannerRef.current.offsetLeft,
      y: bannerRef.current.offsetTop
    }
  }

  const dragAndDrop = (event: React.MouseEvent, elementType: Elem) => {
    const elem = document.getElementById((event.target as Element).id)
    elem.ondragstart = () => false
    const coords = getBannerCoords()
    moveAt(event.pageX, event.pageY)

    function moveAt(X: number, Y: number) {
      if (X >= (coords.x + elem.offsetWidth / 2) && X <= (coords.x + Number(banner.width.slice(0, -2)) - elem.offsetWidth / 2) && Y >= (coords.y + elem.offsetHeight / 2) && Y <= (coords.y + Number(banner.height.slice(0, -2)) - elem.offsetHeight / 2))
        switch (elementType) {
          case 'image':
            banner.setState({
              ...banner,
              imgs: [
                ...banner.imgs.filter((image: Image) => image.id !== elem.id),
                {
                  ...banner.imgs.find((image: Image) => image.id === elem.id),
                  left: X - coords.x + 'px',
                  top: Y - coords.y + 'px'
                }
              ]
            })
            break
          case 'text':
            banner.setState({
              ...banner,
              p: {
                ...banner.p,
                left: X - coords.x - elem.offsetWidth / 2 + 'px',
                top: Y - coords.y - elem.offsetHeight / 2 + 'px'
              }
            })
            break
          case 'dataURI':
            banner.setState({
              ...banner,
              dataURI: {
                ...banner.dataURI,
                left: X - coords.x + 'px',
                top: Y - coords.y + 'px'
              }
            })
            break
        }
    }

    function onMouseMove(event: MouseEvent) {
      moveAt(event.pageX, event.pageY);
    }

    document.onmousemove = onMouseMove

    elem.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      elem.onmouseup = null;
      document.onmousemove = null
    };
  }

  return (
    <div
      style={{
        border: '1px solid #412E2E',
        borderRadius: '40px',
        position: 'relative',
        height: banner.height,
        width: banner.width,
        backgroundColor: banner.backgroundColor
      }}
      ref={bannerRef}
      id='banner'
    >
      {banner.imgs.map((image: Image) =>
        <img
          id={image.id}
          alt='image'
          src={image.src}
          key={image.id}
          style={{
            position: 'absolute',
            width: 'fit-content',
            left: image.left,
            top: image.top,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
          onMouseDown={(event) => dragAndDrop(event, 'image')}
        />
      )}
      {banner.dataURI.id &&
        <img
          id={banner.dataURI.id}
          alt='image'
          src={banner.dataURI.src}
          style={{
            position: 'absolute',
            width: 'fit-content',
            left: banner.dataURI.left,
            top: banner.dataURI.top,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
          onMouseDown={(event) => dragAndDrop(event, 'dataURI')}
        />
      }
      {banner.p.text &&
        <p
          id='p'
          style={{
            position: 'absolute',
            top: banner.p.top,
            left: banner.p.left,
            cursor: 'pointer',
            fontSize: banner.fontSize,
            color: banner.color,
            lineHeight: '100%',
            maxHeight: 3 * banner.fontSize.slice(0, -2) + 'px',
            overflow: 'hidden',
          }}
          onMouseDown={(event) => dragAndDrop(event, 'text')}
        >
          {banner.p.text}
        </p>
      }
    </div>
  )
}

export default BannerView