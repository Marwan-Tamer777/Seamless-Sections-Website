import { useEffect, useState } from "react";

function HeaderSectionWrapper(props) {
    let {children} = props

    return (
      <div className="wrapper w-screen min-h-screen">
        <div className=" child-container fixed top-[50vh] left-[50vw]">
            {children}
        </div>
      </div>
    );
}

export default HeaderSectionWrapper;