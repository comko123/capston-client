import MenuBar from "../Bar/MenuBar";
import ChangeFall from "./ChangeFall";
import ChangePassWord from "./ChangePassWord";
import ChangeWinter from "./ChangeWinter";
import ChangeSpring from "./ChangeSpring"
import ChangeStyle from "./ChangeStyle";
import ChangeSummer from "./ChangeSummer";
export default function Information (){
    return (<>

    <h3>내정보 수정</h3> 
    <h5>마이페이지&gt;내정보 수정하기</h5>

<ChangeSpring/>
<br/>
<ChangeSummer/>
<br/>
<ChangeFall/>
<br/>
<ChangeWinter/>
<br/>
<ChangeStyle/>
<br/>
<ChangePassWord/>
<br/>
<MenuBar/>
    
  </>
    )

    
}

