import { useEffect } from "react";
import axp from "../../Images/axp-photography-yEIrpmnHd2g-unsplash.jpg"

function FirstSection() {

  useEffect(()=>{
    document
      .querySelector("#section_one")
      .addEventListener("SectionOpacity", (e) =>
        console.log("section One", e.detail)
      );
  },[])

  return (
    <div id="section_one" className="w-full h-full">
        <img src={axp} alt="axp" className="object-cover w-full h-full">
        </img>
    </div>
  );
}

export default FirstSection;
