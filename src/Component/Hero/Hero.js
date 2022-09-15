import React from "react";
import {
  BsFillHeartFill,
  BsClockFill,
  BsBarChartLineFill,
} from "react-icons/bs";
import HeroCard from "../HeroCard/HeroCard";
import "./hero.css";
import heroImage from "../../Assets/images/hero.png";
import heroDec from "../../Assets/images/paski.png"
import CountUp from "react-countup";
import { motion } from "framer-motion"

const Hero = () => {
  const transition = {type:'spring' , duration:3}
  return (
    <div className="hero__container">
      
      <div className="hero__left">
        <div className="hero__ad">
          <motion.div 
          initial={{left:'245px'}}
          whileInView={{left:'6px'}}
          transition={{...transition,type:'tween'}}
          className="slider"></motion.div>
          <span>Swipe for you better condition</span>
        </div>
        <div className="hero__title">
          <h1>
            <span>Fight </span>for the best
          </h1>
          <h1>version of you!</h1>
          <p>Our website will show you how to do it in smart way</p>
        </div>
        <div className="hero__stats">
          <div className="stats__col">
            <CountUp start={0} 
            end={20}
            duration={5} />
            <p>EXPERT COACHES</p>
          </div>
          <div className="stats__col">
            <CountUp start={0} 
            end={128} 
            duration={5}/>
            <p>MEMBERS JOINED</p>
          </div>
          <div className="stats__col">
            <CountUp start={0}
             end={30}
             duration={5} />
            <p>FITNESS PROGRAMS</p>
          </div>
        </div>
        <div className="hero__btn">
          <button className="btn">Get Start</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__image__col">
        <img src={heroDec} alt="hero" className="hero__dec" />
          <img src={heroImage} alt="hero" className="hero__image" />
        </div>
        <div className="hero__feature__col">
          <HeroCard
            className="hero__card puls"
            icon={<BsFillHeartFill />}
            feture="Hearth Rate"
            result="140 bpm"
          />
          <HeroCard
            className="hero__card time"
            icon={<BsClockFill />}
            feture="Time"
            result={
              <CountUp
                start={0.0}
                end={60.0}
                duration={1000}
                useEasing={true}
                useGrouping={true}
                separator=" "
                suffix=" sec"
              />
            }
          />
          <HeroCard
            className="hero__card calories"
            icon={<BsBarChartLineFill />}
            feture="Calories Burned"
            result={
              <CountUp
                start={100.0}
                end={300.0}
                duration={1000}
                useEasing={true}
                useGrouping={true}
                separator=" "
                suffix=" kcal"
              />
            }
          />
        </div>
        <div className="hero__stripe"></div>
      </div>
    </div>
  );
};

export default Hero;
