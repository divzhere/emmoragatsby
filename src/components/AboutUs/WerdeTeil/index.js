import React from "react"
import WerdeTeilImage from "../../../images/TeamAboutUs.jpg"
import data from "./data"

const WerdeTeil = () => {
  return (
    <div>
      <img src={WerdeTeilImage} />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <button>{data.buttonLabel}</button>
    </div>
  )
}

export default WerdeTeil
