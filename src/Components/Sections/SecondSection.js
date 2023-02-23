import { useEffect } from "react";
import il from "../../Images/il-vagabiondo-MdVklE1w2EI-unsplash.jpg"
function SecondSection() {

    useEffect(() => {
      document
        .querySelector("#section_two")
        .addEventListener("SectionOpacity", (e) =>{
          //console.log("section Two", e.detail)
          //e.target.querySelector("p").style.transform =`scale(${e.detail*1.5})`
          e.target.querySelector("img").style.transform = `scale(${
            e.detail >= 0.75 ? 1 : 1.75 - e.detail
          })`;
    });
    }, []);

  return (
    <div id="section_two" className=" w-full h-full flex flex-auto justify-center items-center">
      <img src={il} alt="il" className="absolute top-0 object-cover w-full h-full -z-10"></img>
      <p className="uppercase text-3xl text-white font-extrabold">
        the
        <span className="text-red-500">
          <br/>
          bad
        </span>
      </p>
    </div>
  );
}

export default SecondSection;
