import React from "react"
import ReactPlayer from "react-player"
import madScienceGif from "./mad-science-gif.gif"
import hoopItAppGif from "./hoop.it.app.gif"
import gigzillaGif from "./Gigzilla.gif"
import PopupStyles from "./popup.module.scss"
import FireStoreGif from "./fire-store-gif.gif"
import JobToastGif from "./job-toast-gif.gif"

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
    if (name === "Job Toast"){
      gif = JobToastGif
    }
    return gif
  }
  return (
    <div className={PopupStyles.container}>
      <img src={getImage(props.name)} />
    </div>
  )
}
