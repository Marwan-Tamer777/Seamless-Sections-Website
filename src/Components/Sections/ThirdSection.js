import { useEffect } from "react";
import neb from "../../Images/nubelson-fernandes-QNch8putqnU-unsplash.jpg"
function ThirdSection() {

    useEffect(() => {
      document
        .querySelector("#section_three")
        .addEventListener("SectionOpacity", (e) =>
          console.log("section Three", e.detail)
        );
    }, []);

  return (
    <div id="section_three" className="w-full h-full">
      <img src={neb} alt="neb" className="object-cover w-full h-full"></img>
    </div>
  );
}

export default ThirdSection;
