const opacityEvent = (ratio)=>(
    new CustomEvent("SectionOpacity", {
    detail:ratio
  }
)) 

//Just a dummy effect to allow the children to be notified when their parent opacity changes
export {opacityEvent}
