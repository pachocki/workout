import React from "react";
import { plansData } from "../../Data/plansData";
import "./pricing.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Pricing = () => {
  return (
    <section className="pricing">
      <h1 className="pricing__title">Let's start you journey from today</h1>
      <div className="pricing__container">
        {plansData.map((plan, i) => (
          <div className="pricing__card">
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="pricing__features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <BsFillCheckCircleFill />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
      
      
      
    </section>
  );
};

export default Pricing;
