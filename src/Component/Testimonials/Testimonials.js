import React from "react";
import { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../Data/testimonialsData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <section className="testimonials">
      <h1 className="testimonial__title">What they say about us</h1>
      <div className="testimonials__container">
        <div className="testimonials__left">
          <div className="testimonials__card">
            <span>{testimonialsData[selected].review}</span>
            <span>
              {testimonialsData[selected].name}✱
              {testimonialsData[selected].status}
            </span>
          </div>
        </div>
        <div className="testimonials__right">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box"
          ></motion.div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -10 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt="testimonials"
          />
          <div className="testimonials__arrows">
            <span
              onClick={() => {
                selected === 0
                  ? setSelected(testimonialLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
            >
              <BsArrowLeft />
            </span>
            <span
              onClick={() => {
                selected === testimonialLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            >
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
