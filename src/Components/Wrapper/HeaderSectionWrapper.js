import { useEffect, useState } from "react";

function HeaderSectionWrapper(props) {
    let {children} = props

    return (
      <div className="wrapper w-screen min-h-[150vh]">
        <div className=" child-container fixed top-0 left-0 h-full w-full">
            {children}
        </div>
      </div>
    );
}

export default HeaderSectionWrapper;