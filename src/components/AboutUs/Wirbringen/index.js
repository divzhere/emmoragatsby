import React from "react"
import WirbringenImage from "../../../images/shutterstock_488682844.jpg"
import data from "./data"

const Wirbringen = () => {
  return (
    <div>
      <img src={WirbringenImage} />
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
    </div>
  )
}

export default Wirbringen
