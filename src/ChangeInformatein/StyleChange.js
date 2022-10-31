import { selectUserCheck } from "../data"

const StyleChange = () => {
    return(<>
    <h3>스타일 수정하기</h3>
    <form onSubmit={e=>{
            e.preventDefault() 
        }}>
        {selectUserCheck.스타일.map((item,index)=><div key={index}>
       <input type = "checkbox" value = {item}/> {item}
        </div>)}
        <input type="submit" value = "수정하기"/>
        </form>
    </>)
}
export default StyleChange