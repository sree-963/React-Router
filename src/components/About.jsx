import {useState,useCallback} from 'react'
import Contact from './Contact';

const About = () => {

const [count,setCount]=useState(0);

const Handclick = useCallback(()=>{
  setCount((prev)=> prev + 1)
},[])

console.log('Re-Rendered')

  return (
    <div>
      
      <h1>result : {count}</h1>
    
      <button onClick={Handclick}> Parent Increase </button>

      <Contact handleclick={Handclick}/>

    </div>
  )
}

export default About
