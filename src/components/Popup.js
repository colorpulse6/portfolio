import React from "react"
import ReactPlayer from "react-player"
import madScienceGif from "./mad-science-gif.gif"
import hoopItAppGif from "./hoop.it.app.gif"
import gigzillaGif from "./Gigzilla.gif"
import PopupStlyles from "./popup.module.scss"
import FireStoreGif from "./fire-store-gif.gif"
export default function Popup(props) {
  function getImage(name) {
    let gif
    if (name === "Hoop.It.App") {
      gif = hoopItAppGif
    }
    if (name === "Mad Science") {
      gif = madScienceGif
    }
    if (name === "Gigzilla") {
      gif = gigzillaGif
    }
    if (name === "Fire Store"){
      gif = FireStoreGif
    }
    return gif
  }
  return (
    <div className={PopupStlyles.container}>
      <img src={getImage(props.name)} />
    </div>
  )
}
