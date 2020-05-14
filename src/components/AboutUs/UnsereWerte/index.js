import React from "react"
import UnsereWerteHeart from "../../../images/Hero_Heart_big.png"
import data from "./data"

const UnsereWerte = () => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <div>
        {data.tiles.map(item => {
          return (
            <div>
              <img src={UnsereWerteHeart} />
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UnsereWerte
