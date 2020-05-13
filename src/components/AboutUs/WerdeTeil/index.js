import React from "react"
import data from "./data"

const WerdeTeil = () => {
  return (
    <div>
      <img />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <button>{data.buttonLabel}</button>
    </div>
  )
}

export default WerdeTeil
