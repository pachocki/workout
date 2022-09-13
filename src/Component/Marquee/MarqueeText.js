import React from 'react'
import Marquee from "react-fast-marquee";
import "./marquee.css"


const MarqueeText = (props) => {
  return (
    <div>
    <Marquee gradient={false} speed={50}>
  <span className="marquee__text">{props.text}</span>
    </Marquee>
    </div>
  )
}

export default MarqueeText
