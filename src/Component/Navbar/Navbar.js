import React from "react";
import Logo from "../../Assets/images/logo.png";
import {useState} from "react";
import { Link } from "react-router-dom";
import {FaBars , FaTimes} from 'react-icons/fa'
import "./navbar.css"

const Navbar = () => {
  const[click,setClick]=useState(false)
  const handleClick =()=>setClick(!click)
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav className={colorChange ? 'navbar colorchange' : 'navbar'}>
      <div className="logo__app">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="navbar__link">
        <ul className={click? "nav__menu open" : "nav__menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>
          </li>
          <li>
            <Link to="/meal">Meal</Link>
          </li>
          <li>
            <Link to="/meal">About</Link>
          </li>
          <li>
            <Link to="/meal">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
