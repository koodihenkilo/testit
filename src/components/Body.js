import React, { useState, useEffect } from 'react'

import './Body.css'


export default function Body() {
  
const [dont, setDont] = useState(false)
const [num, setNum] = useState([]);


// useEffect(() => {
//    let number = Math.floor(Math.random() * 100)
   
// }, []);

   // function randomNumberInRange(min, max) {
    

   //  return Math.floor(Math.random() * (max - min + 1)) + min;
   // }


function lotteryNumbers() {
   const array = Array(5).fill().map(() => Math.floor(Math.random() * (50 - 1 + 1)) + 1)
   setNum(array)
}

console.log(num)







const handleClick = () => {
      lotteryNumbers()
   
   };

    
    
    return (
    <div className='body'>
        <button onClick={() => dont? setDont(false): setDont(true)} className='dontpress' >?</button>
        <button className='maybepress'>?</button>
        <button onClick={handleClick} className='justpress'>?</button>
        <button className='trypress'>?</button>
        {
          dont ? <p className='dont'>Why did you press?!</p> :null         
        }
    
    <div className='lottery'> 
       
       <p>Number is: {num.map((num) => {return num + ' ' })}  </p>
      
       
    </div>

    </div>
  )
}
