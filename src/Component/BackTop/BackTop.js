import React from 'react'
import { useState, useEffect, useRef } from "react";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import './backtop.css'

const BackTop = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  const [visibility, setVisibility] = useState(false);
  const scrollTop = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 3800
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div>
         <span
 onClick={() =>
   setPosition({ ...position, position: { top: 0, left: 0 } })
 }
 className="circle"
 ref={scrollTop}
><BsFillArrowUpCircleFill/></span>
    </div>
  )
}

export default BackTop



