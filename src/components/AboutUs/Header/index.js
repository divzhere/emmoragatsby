import React from "react"
import data from "./data"

const Header = () => {
  return (
    <div>
      <img />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default Header
