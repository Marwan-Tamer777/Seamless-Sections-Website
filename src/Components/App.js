import logo from '../logo.svg';
import '../CSS/App.css';
import SectionWrapper from "./Wrapper/HeaderSectionWrapper"
import { useEffect } from 'react';
import FirstSection from './Sections/FirstSection';
import SecondSection from "./Sections/SecondSection";
import ThirdSection from './Sections/ThirdSection';

import { opacityEvent } from "../Utils/Events/Sections";
  //Observer callback function, updates each section opacity by it's intersection percentage.
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = entry.intersectionRatio;

        //Whenever we update the wrapper opacity we will also invoke 
        //A custom event to invoke the wrapper's content of the update.
        let containerChild = entry.target.querySelector(".child-container").firstChild;
        containerChild.dispatchEvent(opacityEvent(entry.intersectionRatio));

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
    document.querySelectorAll(".wrapper").forEach((item)=>(observer.observe(item)))

  },[])

  return (
    <div className="App">
      {/*
        The Sections are fixed size to allow user to scroll through them like a normal page.
        but the content itself is fixed to top of screen to allow the seamless fade in and out effect between sections.
      */}
      <div id="header_panels_fix_to" className='overflow-x-hidden'>
        <SectionWrapper>
          <FirstSection />
        </SectionWrapper>

        <SectionWrapper>
          <SecondSection />
        </SectionWrapper>

        <SectionWrapper>
          <ThirdSection />
        </SectionWrapper>
      </div>
    </div>
  );
}

export default App;
