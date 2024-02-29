import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState(' ');
  const [weight, setWeight] = useState(' ');
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState(' ');
  const[errorMessage,setErrorMessage]=useState(' ');
  const calculateBmi=()=>{
    const isvalidheight=/^\d+$/.test(height);
    const isvalidweight=/^\d+$/.test(weight);
    if(isvalidheight && isvalidweight){
      const heightInMeters=height/100;
      const bmivalue=weight/(heightInMeters*heightInMeters );
      setBmi(bmivalue.toFixed(2));
      if(bmivalue<18.5){
        setBmistatus('underweight');
      }else if(bmivalue >=18.5 && bmivalue < 24.9){
        setBmistatus("Normal weight");
      }else if(bmivalue >=25 && bmivalue < 29.9){
        setBmistatus("overweight");
      }else{
         setBmistatus('obese');
      }
      setErrorMessage('');
    }else{
      setBmi(null);
      setBmistatus('');
      setErrorMessage('please enter valid numeric value for height and weight.');
    }
  }
   const clearAll=()=>{
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmistatus('');
   }
  return (
    <>
      <h2>BMI CALCULATOR</h2>
       <div className='bmi'>
       <div className='box'>
        </div> 
       <div className='data'>
        <h3>BMI calculator</h3>
       {errorMessage && <p className='error'>{errorMessage} </p>}
        <div className='input-container'>
          <label htmlFor='height'>Height(cm):</label>
          <input type='text' value={height}id='height' onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className='input-container'>
          <label htmlFor='weight'>weight(cm):</label>
          <input type='text' value={weight}id='weight' onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <button className='btn' onClick={calculateBmi}>calculate BMI</button>
        <button className='btn2' onClick={clearAll}>clearAll</button>
        {bmi !==null &&(
          <div className='result'>
          <p>your BMI is:{bmi}</p>
          <p>Status:{bmistatus}</p>
          
        </div>
        )}
        </div> 
        </div> 
      
          
      
    </>
  )
}

export default App
