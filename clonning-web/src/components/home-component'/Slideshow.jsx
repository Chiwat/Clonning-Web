import { useEffect, useRef, useState } from "react";
import dataSlide from "../../data/data";
import { Link } from "react-router-dom";
const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  let length = dataSlide.length 
  let timer = useRef(null)

  function resetTime()  {
    if(timer.current){
        clearTimeout(timer.current)
    }
  }
  const nextSlide =()=>{
    current === length-1 ? setCurrent(0):setCurrent(current+1)
  }
  const prevSlide =()=>{
    current === 0 ? setCurrent(length-1):setCurrent(current-1)
  }
  
  useEffect(()=>{
    resetTime()
    timer.current = setTimeout(()=>nextSlide(),4000)
  })
  return (
    <div className="slides">
      <button className="prev" onClick={prevSlide}></button>
      <button className="next" onClick={nextSlide}></button>
      {dataSlide.map((data, index) => {
        return (
          <div  key={index} className={current ? "slide active": "slide"}>
            {current === index  && 
            (<Link to={data.url} target="_blank">
              <img src={data.img} alt={data.name} />
            </Link>) }
          </div>
        );
      })}
    </div>
  );
};
export default Slideshow;
