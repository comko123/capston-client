const slider = (result,change,curent) => {
curent.current.style.transform = `translate(${result}vw)`
change(result)}

const SliderButton = ({text,moveRef,className,optionConstant,direction,setConstant,currentConstant,movement}) => {
return <button className={className} disabled={optionConstant?true:false}
style={optionConstant?{border:"3px solid #4254FF",backgroundColor:"white",color:"#4254FF"}
:{backgroundColor:"#4254FF",color:"white",border:"3px solid #4254FF"}}
onClick={()=>{const res = direction(currentConstant,movement)
slider(res,setConstant,moveRef)}}>{text}</button>}
export default SliderButton