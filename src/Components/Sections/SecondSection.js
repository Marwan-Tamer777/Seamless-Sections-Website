import { useEffect } from "react";
import il from "../../Images/il-vagabiondo-MdVklE1w2EI-unsplash.jpg"
function SecondSection() {

    useEffect(() => {
      document
        .querySelector("#section_two")
        .addEventListener("SectionOpacity", (e) =>
          console.log("section Two", e.detail)
        );
    }, []);
  return (
    <div id="section_two" className="w-full h-full">
      <img src={il} alt="il" className="object-cover w-full h-full"></img>
    </div>
  );
}

export default SecondSection;
