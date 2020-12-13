export interface Image {
  id: string
  src: string
  left: number
  top: number
}

export interface IBanner {
  height: number
  width: number
  imgs: Image[]
  dataURI: Image
  backgroundColor: string
  p: {
    text: string,
    left: number
    top: number
  }
  fontSize: number
  color: string
}

export enum BannerNames {
  height = 'height',
  width = 'width',
  dataURI = 'dataURI',
  text = 'text',
  fontSize = 'fontSize',
  image = 'image',
  file = 'file',
  color = 'color'
}

export const BannerTitles = {
  [BannerNames.height]: 'Высота',
  [BannerNames.width]: 'Ширина',
  [BannerNames.dataURI]: 'dataURI',
  [BannerNames.text]: 'Текст',
  [BannerNames.fontSize]: 'Размер',
  [BannerNames.file]: 'Файл',
  [BannerNames.color]: 'Цвет'

}

export enum SettingTitles {
  params = 'Параметры',
  images = 'Картинки',
  background = 'Фон',
  font = 'Шрифт'
}

export interface Image2 {
  id: string
  src: string
  left: number
  top: number
}

export interface IBanner2 {
  height: number
  width: number
  imgs: Image[]
  dataURI: Image
  backgroundColor: string
  p: {
    text: string,
    left: number
    top: number
  }
  fontSize: number
  color: string
}