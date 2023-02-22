import logo from '../logo.svg';
import '../CSS/App.css';
import SectionWrapper from "./HeaderSectionWrapper"
import { useEffect } from 'react';

  //Observer callback function, updates each section opacity by it's intersection percentage.
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = entry.intersectionRatio;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  };

function App() {


  useEffect(()=>{
    //On mount create a list of 100 thresholds and an observer.
    //whenever 0.01 0.02 0.03 ...... 0.98 0.99 1 of a section is passed it, the observer will update opacity.
    let num =0,thresholds = [];
    while(num<=1){
      num+=0.01;
      thresholds.push(num);
    }

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: thresholds//[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
    };

    let observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(".panel").forEach((item)=>(observer.observe(item)))

  },[])

  return (
    <div className="App">

      {/*
        The Sections are fixed size to allow user to scroll through them like a normal page.
        but the content itself is fixed to top of screen to allow the seamless fade in and out effect between sections.
      */}
      <div id="header_panels_fix_to">

        <SectionWrapper><div>sfajbfgkjasfgkjabs</div></SectionWrapper>
        <div className="panel w-full h-screen">
          <div className="fixed top-[50vh] left-[50vw] text-black">ONE</div>
        </div>
        <div className="panel w-full h-screen">
          <div className="fixed top-[50vh] left-[50vw] text-black">TWO</div>
        </div>
        <div className="panel w-full h-screen">
          <div className="fixed top-[50vh] left-[50vw] text-black">
            THREE
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
