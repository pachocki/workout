import React from 'react'
import './footer.css'
import LogoFooter from '../../Assets/images/logo.png'
import FooterDecor from '../../Assets/images/kropki.png'

const Footer = () => {
  return (
    <section className="footer">
      <img className="footer__decor" src={FooterDecor} alt="decor"/>
      <img className="footer__decor2" src={FooterDecor} alt="decor"/>
      <div className="footer__left">
        <img src={LogoFooter} alt="logo" className="logo__footer"/>
      </div>
      <div className="footer__right">
        <span>Adress:Kverneland</span>
        <span>Kvernelandsvegen 121</span>
        <span>Mobil:9673411</span>
        <span>WorkouT@gmail.com</span>
      </div>

    </section>
  )
}

export default Footer