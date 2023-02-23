import { useEffect } from "react";
import neb from "../../Images/nubelson-fernandes-QNch8putqnU-unsplash.jpg"
function ThirdSection() {

    useEffect(() => {
      document
        .querySelector("#section_three")
        .addEventListener("SectionOpacity", (e) =>{
          e.target.querySelector("img").style.transform = `scale(${
            e.detail >= 0.75 ? 1 : 1.75 - e.detail
          })`;
      });
    }, []);

  return (
    <div
      id="section_three"
      className="w-full h-full flex flex-auto justify-center items-center"
    >
      <img
        src={neb}
        alt="neb"
        className="absolute top-0 object-cover w-full h-full -z-10"
      ></img>
      <p className="uppercase text-3xl text-white font-extrabold ">
        And the
        <span className="text-[#fcb91b]">
          <br/>
          Ugly.
        </span>
      </p>
    </div>
  );
}

export default ThirdSection;
