import React from "react";
import MarqueeText from "../../Component/Marquee/MarqueeText";
import './programs.css'
import {programCategories} from '../../Data/programCategories'

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs__container">
        <h1 className="programs__title">
            Explore our programs
        </h1>
      </div>
      <div className="program__categories">
        {programCategories.map((program)=>(
            <div className="category__card">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
            </div>
        ))}
      </div>

      <div className="marquee__programs">
        <MarqueeText text="✱ Beginners friendly ✱ Live consultancy ✱ Training monitoring ✱ Training plan ✱ Meal Plan" />
      </div>
    </section>
  );
};

export default Programs;
