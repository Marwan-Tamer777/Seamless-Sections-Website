import { useEffect } from "react";
import axp from "../../Images/axp-photography-yEIrpmnHd2g-unsplash.jpg"

function FirstSection() {

  useEffect(()=>{
    document
      .querySelector("#section_one")
      .addEventListener("SectionOpacity", (e) =>{
        //e.target.querySelector("p").style.transform =`translate(${(1-e.detail)*100}vw)`
        e.target.querySelector("img").style.transform =`scale(${e.detail>= 0.75?(1):(1.75-e.detail)})`
      });
  },[])

  return (
    <div
      id="section_one"
      className=" w-full h-full flex flex-auto justify-center items-center"
    >
      <img
        src={axp}
        alt="axp"
        className="absolute top-0 object-cover w-full h-full -z-10"
      ></img>
      <p className="uppercase text-3xl text-white font-extrabold ">
        The
        <span className="text-green-600">
          <br/>
          Good
        </span>
      </p>
    </div>
  );
}

export default FirstSection;
