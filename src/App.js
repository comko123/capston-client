import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IdFind from "./find/IdFind";
import Home_page from "./Home_page";
import Information from "./Information";
import Sign_up from "./Sign_up";
import Userdata from "./Userdata";
import NewReactiveType from "./Reactive type/NewReactiveType";
import LogoWithMainPage from "./LogoWithMainPage";
import Mypage from "./Mypage";
import Myadress from "./Myadress";
import ChangeToInformation from "./ChangeToInformation";
const App = () => {
return(
<Userdata>
<Router>
<Switch>
<NewReactiveType>
<Route path="/" exact component={LogoWithMainPage}/>
<Route path="/weather_coder/my_page"  component={Mypage}/>
<Route path="/weather_coder/Login" component={Home_page}/>
<Route path="/weather_coder/Id_find"  component={IdFind}/>
<Route path="/weather_coder/Sign_up" component={Sign_up}/>
<Route path="/weather_coder/Input_adress" component={Myadress}/>
<Route path="/weather_coder/Changing" component={ChangeToInformation}/>
<Route path="/weather_coder/UserInformation/:id" component={Information}/>
</NewReactiveType>
</Switch>
</Router>
</Userdata>
    );
}

export default App;