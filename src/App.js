import './App.css';
import { useDebugValue, useState } from 'react';

function App() {
  const date = new Date()
  const [hours , setHours ]     = useState(date.getHours())
  const [minutes , setMinutes ] = useState(date.getMinutes())
  const [seconds, setSeconds ]  = useState(date.getSeconds())
  const [ampm , setAmPm] = useState(null)
  // let ampm;
  setInterval(()=>{
    const newdate = new Date()
    let hours = newdate.getHours()
    setAmPm((hours >= 12) ? 'PM' : 'AM');
    setHours(hours%12 || 12)
    setMinutes(newdate.getMinutes())
    setSeconds(newdate.getSeconds())
    
  }, 1000)

  const onBtnClick = ()=>{
    console.log(`Current Time is ${hours}H : ${minutes}M : ${seconds} ${ampm}`)
    
  }

    return (
      <>
         <div className="container">
             <div className="p">{hours} : {minutes} : {seconds} {ampm} </div>
             <button className="btn" style={{textTransform : 'capitalize'}} onClick = {onBtnClick}>Get Time</button>
   
         </div>
      </>
     );
  }
  
  


export default App;
