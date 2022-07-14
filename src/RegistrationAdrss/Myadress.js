import MenuBar from "../Bar/MenuBar";
import RegistrationFall from "./RegistrationFall";
import RegistrationSpring from "./RegistrationSpring";
import RegistrationStyle from "./RegistrationStyle";
import RegistrationSummer from "./RegistrationSummer";
import RegistrationWinter from "./RegistrationWinter";
const Myadress = () => {
return(
<>
<h3>자신의옷 등록하기</h3>
<h5>마이페이지&gt;자신의옷 등록하기</h5>
<RegistrationSpring/>
<br/>
<RegistrationSummer/>
<br/>
<RegistrationFall/>
<br/>
<RegistrationWinter/>
<br/>
<RegistrationStyle/>
<MenuBar/>
</>

    )

}
export default Myadress;