import React from 'react'
import "./herocard.css"

const HeroCard = (props) => {
  return (
    <div className="hero__card">
        <div className={props.className}>
            <span>{props.icon}</span>
          <p>{props.feture}</p>
          <p>{props.result}</p>
          </div>
        </div>
  )
}

export default HeroCard