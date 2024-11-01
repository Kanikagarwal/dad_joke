import { useEffect, useState } from 'react'
import dadImage from './dad.png';

import './App.css'

function App() {
  
  const url = "https://icanhazdadjoke.com/slack";
  const [joke, setJoke] = useState("")
  
const typeWriterEffect = (text,speed=50)=>{
  let i =-1;
  setJoke("");
  const typeInterval = setInterval(() => {
    setJoke((prev)=>prev+text.charAt(i));
    i++;
    if(i>=text.length)clearInterval(typeInterval);
  }, speed)
}




  const generate = ()=>{
    setTimeout(()=>{
      fetch(url)
      .then((res)=>res.json())
      .then((res)=>typeWriterEffect(res["attachments"][0].fallback,100));

    },1200)
  }
  return (
    <>
    <div className='flex p-4 items-center'>
    <img className='px-2' src={dadImage} alt="" width={"400px"}/>
    <div>

   <h1>{joke || "Click generate for a dad joke" }</h1>
   

   <br />
   <button className='bg-black text-white p-3 w-32 text-center' onClick={generate}>Generate</button>
    </div>
    </div>
    </>
  )
}

export default App
