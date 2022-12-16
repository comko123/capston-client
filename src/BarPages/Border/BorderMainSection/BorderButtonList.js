import { useNavigate, useParams } from "react-router-dom"
import React from "react"
const BorderButtonList = ({data,borderStyleObject,borderClickStyleObject}) => {
      const parm = useParams()
      const navigate = useNavigate()
      return <>{!data.length?null:data.map(({id},index)=>{
      if(!(index%10)){return (<span key={id}>
      <input className="numberBtn" type="button" value={!index?index:index/10}
      style={+parm.index/10 === Math.floor(index/10)?
      borderStyleObject:borderClickStyleObject}
      onClick={()=>navigate(`/border/route/${index}`)}/></span>)}})}</>}
export default React.memo(BorderButtonList)