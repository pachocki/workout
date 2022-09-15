import React from 'react'
import {useState} from 'react'
import Input from "./Input"
import Button from "./Button"
import './bmi.css'

const BmiCalc = () => {
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    const[bmi,setBmi]=useState();
    const[bmiClass,setBmiClass]=useState();
    const handleHeightChange =(event)=>setHeight(event.target.value)
    const handleWeightChange =(event)=>setWeight(event.target.value)
    const calcBmi=()=>{
        let bmiValue=(weight/(height/100)**2).toFixed(2);
        setBmi(bmiValue)
        let bmiClass = getBmi(bmiValue)
        setBmiClass(bmiClass);
        setHeight("")
        setWeight("")
    }

    const getBmi = (bmi)=>{
        if(bmi<18.5){
            return "Underweight"
        }else if(bmi>=18.5 && bmi <24.9){
            return "Normal Weight"
        }else if(bmi>=25 && bmi<29.9){
            return "Overweight"
        }else{
            return "Obesity"
        }
    }
  return (
    <section className="bmi__calculator">
        <h1 className="bmi__title">Check your BMI now !</h1>
        <div className="bmi__calculator__container">
            <Input 
            label="Height"
            placeholder="Enter height in cm"
            handleChange={handleHeightChange}
            value={height}
            />
            <Input 
            label="Weight"
            placeholder="Enter weight in kg"
            handleChange={handleWeightChange}
            value={weight}
            />
            <Button label="Calculate" onClick={calcBmi}/>
            <div className="bmi__answer">
            {isNaN(bmi)?null:<h2>Your Bmi = {bmi}</h2>}
            
            <h2>{bmiClass}</h2>
        </div>
        </div>
        
      
    </section>
  )
}

export default BmiCalc
