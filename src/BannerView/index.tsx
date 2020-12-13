import React, { FC, useContext, useRef} from "react"
import {BannerContext} from "providers/BannerProvider";
import {Image} from "types";
import {BannerNames, BannerTitles} from "../types";

interface Coords {
  x: number
  y: number
}

const BannerView: FC = () => {
  const {setState, ...banner} = useContext(BannerContext)
  const bannerRef = useRef<HTMLDivElement>()

  const getBannerCoords = (): Coords => {
    return {
      x: bannerRef.current.offsetLeft,
      y: bannerRef.current.offsetTop
    }
  }

  const dragAndDrop = (event: React.MouseEvent, elementType: BannerNames) => {
    const elem = document.getElementById((event.target as Element).id)
    elem.ondragstart = () => false

    const coords = getBannerCoords()
    moveAt(event.pageX, event.pageY)

    const whichElement = (): number => (elementType === BannerNames.image || elementType === BannerNames.dataURI) ? elem.offsetWidth / 2 : banner.fontSize

    function moveAt(X: number, Y: number) {
      if (X >= (coords.x + elem.offsetWidth / 2) && X <= (coords.x + banner.width - whichElement()) && Y >= (coords.y + elem.offsetHeight / 2) && Y <= (coords.y + banner.height - elem.offsetHeight / 2))
        switch (elementType) {
          case BannerNames.image:
            setState({
              ...banner,
              imgs: [
                ...banner.imgs.filter((image: Image) => image.id !== elem.id),
                {
                  ...banner.imgs.find((image: Image) => image.id === elem.id),
                  left: X - coords.x - elem.offsetWidth / 2,
                  top: Y - coords.y - elem.offsetHeight / 2
                }
              ]
            })
            break
          case BannerNames.text:
            setState({
              ...banner,
              p: {
                ...banner.p,
                left: X - coords.x - elem.offsetWidth / 2,
                top: Y - coords.y - elem.offsetHeight / 2
              }
            })
            break
          case BannerNames.dataURI:
            setState({
              ...banner,
              dataURI: {
                ...banner.dataURI,
                left: X - coords.x - elem.offsetWidth / 2,
                top: Y - coords.y - elem.offsetHeight / 2
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

  const getPX = (value: number): string => {
    return value + 'px'
  }

  return (
    <div
      style={{
        border: '1px solid #412E2E',
        borderRadius: '40px',
        position: 'relative',
        height: getPX(banner.height),
        width: getPX(banner.width),
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
            left: getPX(image.left),
            top: getPX(image.top),
            cursor: 'pointer',
          }}
          onMouseDown={(event) => dragAndDrop(event, BannerNames.image)}
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
            left: getPX(banner.dataURI.left),
            top: getPX(banner.dataURI.top),
            cursor: 'pointer',
          }}
          onMouseDown={(event) => dragAndDrop(event, BannerNames.dataURI)}
        />
      }
      {banner.p.text &&
        <p
          id='p'
          style={{
            position: 'absolute',
            top: getPX(banner.p.top),
            left: getPX(banner.p.left),
            cursor: 'pointer',
            fontSize: getPX(banner.fontSize),
            color: banner.color,
            lineHeight: '100%',
            maxHeight: getPX(3 * banner.fontSize),
            overflow: 'hidden',
            wordBreak: 'break-all'
          }}
          onMouseDown={(event) => dragAndDrop(event, BannerNames.text)}
        >
          {banner.p.text}
        </p>
      }
    </div>
  )
}

export default BannerView