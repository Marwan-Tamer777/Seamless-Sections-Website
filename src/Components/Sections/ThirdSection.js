import { useEffect } from "react";

function ThirdSection() {

    useEffect(() => {
      document
        .querySelector("#section_three")
        .addEventListener("SectionOpacity", (e) =>
          console.log("section Three", e.detail)
        );
    }, []);

  return <div id="section_three">THREE</div>;
}

export default ThirdSection;
