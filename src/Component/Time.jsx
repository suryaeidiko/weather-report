import React,{useState,useEffect} from 'react'

const Time = () => {
    const[myTime,setMyTime] = useState(new Date());
    useEffect(() => {
      let interval = setInterval(() => {
        setMyTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, [])
    

  return (
    <>
        <p>{myTime.toLocaleTimeString()}</p>
    </>

  )
}

export default Time