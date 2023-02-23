import { useEffect } from "react";


function FirstSection() {

  useEffect(()=>{
    document
      .querySelector("#section_one")
      .addEventListener("SectionOpacity", (e) =>
        console.log("section One", e.detail)
      );
  },[])

  return (
    <div id="section_one">
        One
    </div>
  );
}

export default FirstSection;
