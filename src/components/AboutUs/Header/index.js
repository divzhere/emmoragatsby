import React from "react"
import HeaderImage from "../../../images/header.jpg"
import data from "./data"

const Header = () => {
  return (
    <div>
      <img src={HeaderImage} />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default Header
