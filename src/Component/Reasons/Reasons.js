import React from "react";
import "./reasons.css";
import image2 from "../../Assets/images/about2.webp";
import image3 from "../../Assets/images/about3.webp";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Reasons() {
  return (
    <section className="reason">
      <div className="reason__container">
        <div className="reason__left">
       
          <img className="" src={image2} alt="reason" />
          <img className="" src={image3} alt="reason" />
        </div>
        <div className="reason__right">
          <h1 className="reason__title">Why choose us</h1>
          <span>
            <BsFillCheckCircleFill /> We customize every workout to help you
            reach your goals.
          </span>
          <span>
            <BsFillCheckCircleFill /> Our personal trainers help you stay
            motivated as we work to establish a consistent workout schedule.
          </span>
          <span>
            <BsFillCheckCircleFill /> Stop wasting your time with workouts that
            aren't giving you results. Our team will ensure that you achieve
            results.
          </span>
          <span>
            <BsFillCheckCircleFill /> Interested in getting fit, but don't know
            where to start? We'll introduce you to fun, effective routines and
            valuable fitness knowledge.{" "}
          </span>
          <span>
            <BsFillCheckCircleFill /> The most important difference between us
            and other gyms is our ability to come to you and work with you in
            the comfort of your preferred setting.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
