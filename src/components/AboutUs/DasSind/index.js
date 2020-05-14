import React from "react"
import DasSindImage from "../../../images/EmmoraTeam4.jpg"
import data from "./data"

const DasSind = () => {
  return (
    <div>
      <img src={DasSindImage} />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default DasSind
