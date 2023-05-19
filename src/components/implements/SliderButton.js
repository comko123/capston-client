const slider = (result, change, curent) => {
    curent.current.style.transform = `translate(${result}vw)`
    change(result)
}

const SliderButton = (props) => {
    return (
        <button className={props.className} disabled={props.optionConstant ? true : false}
            style={props.optionConstant ? { border: "3px solid #4254FF", backgroundColor: "white", color: "#4254FF" }
                : { backgroundColor: "#4254FF", color: "white", border: "3px solid #4254FF" }}
            onClick={() => {
                const res = props.direction(props.currentConstant, props.movement)
                slider(res, props.setConstant, props.moveRef)
            }}>{props.text}</button>)
}
export default SliderButton