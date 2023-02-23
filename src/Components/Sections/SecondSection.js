import { useEffect } from "react";

function SecondSection() {

    useEffect(() => {
      document
        .querySelector("#section_two")
        .addEventListener("SectionOpacity", (e) =>
          console.log("section Two", e.detail)
        );
    }, []);
  return <div id="section_two">TWO</div>;
}

export default SecondSection;
