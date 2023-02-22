
function HeaderSectionWrapper(props) {
    let {children} = props
    return (
      <div className="panel w-screen min-h-screen">
        <div className="fixed top-[50vh] left-[50vw]">
            {children}
        </div>
      </div>
    );
}

export default HeaderSectionWrapper;;