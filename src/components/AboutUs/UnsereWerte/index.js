import React from "react"
import data from "./data"

const DasSind = () => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.subTitle}</p>
      <div>
        {data.tiles.map(item => {
          return (
            <div>
              <img />
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DasSind
