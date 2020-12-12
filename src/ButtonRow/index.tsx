import React, {FC, useContext} from "react"
import styled from "styled-components"
import html2canvas from 'html2canvas';
import Button from "./Button";
import {BannerContext} from "../providers/BannerProvider";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  margin-bottom: 40px;
  
  @media (max-width: 850px) {
    padding: 0 80px;
  }
  
  @media (max-width: 700px) {
    padding: 0 30px;
  }
  
  @media (max-width: 480px) {
    padding: 0;
  }
  
  @media (max-height: 950px) {
    margin-bottom: 25px;
  }
 
`;

const ButtonsRow: FC<{}> = () => {
  const banner = useContext(BannerContext)

  const download = (filename: string, dataURI: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', dataURI);
    element.setAttribute('download', filename);

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