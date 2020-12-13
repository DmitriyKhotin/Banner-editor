import React, {FC, useContext} from "react"
import html2canvas from 'html2canvas';
import Button from "./Button";
import {BannerContext} from "providers/BannerProvider";
import {ButtonWrapper} from "./styles";

const ButtonsRow: FC = () => {
  const banner = useContext(BannerContext)

  const download = (filename: string, dataURI: string) => {
    const element = document.createElement('a');
    element.href = dataURI
    element.download = filename

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const saveAsPNG = () => {
    html2canvas(document.getElementById('banner')).then((canvas) => {
      download('banner.png', canvas.toDataURL());
    });
  }

  const copyAsHtml = () => {
    navigator.clipboard
      .writeText(document.getElementById('banner').outerHTML)
      .then(() => alert('Скопировано'))
      .catch(() => alert('Ошибка'))
  }

  const copyAsJson = () => {
    navigator.clipboard
      .writeText(JSON.stringify(banner))
      .then(() => alert('Скопировано'))
      .catch(() => alert('Ошибка'))
  }
  return (
    <ButtonWrapper>
      <Button text='.png' onClick={saveAsPNG}/>
      <Button text='.html' onClick={copyAsHtml}/>
      <Button text='.json' onClick={copyAsJson}/>
    </ButtonWrapper>
  )
}

export default ButtonsRow