import Userdata from "./Userdata";
import IdFind from "./Find/IdFind";
import Mypage from "./MyPage/Mypage";
import Board from "./BarPages/Board";
import Sign_up from "./LogInAndSignUp/Sign_up";
import LogoWithMainPage from "./LogoWithMainPage";
import InfoToMyInfo from "./BarPages/InfoToMyInfo";
import Myadress from "./RegistrationAdrss/Myadress";
import Login_page from "./LogInAndSignUp/Login_page";
import InfoToWeather from "./BarPages/InfoToWeather";
import Information from "./ChangeInformatein/Information";
import InfoToMyClothing from "./BarPages/InfoToMyClothing";
import NewReactiveType from "./ReactiveType/NewReactiveType";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
return(
<Userdata>
<Router>
<Switch>
<NewReactiveType>
<Route path="/" exact component={LogoWithMainPage}/>
<Route path="/weather_code/Board" component={Board}/>
<Route path="/weather_coder/My_page" component={Mypage}/>
<Route path="/weather_coder/Id_find" component={IdFind}/>
<Route path="/weather_coder/Login" component={Login_page}/>
<Route path="/weather_coder/Sign_up" component={Sign_up}/>
<Route path="/weather_coder/Input_adress" component={Myadress}/>
<Route path="/weather_coder/UserInformation/:id" component={Information}/>
<Route path="/weather_code/Recommendation/weather" component={InfoToWeather}/>
<Route path="/weather_code/Recommendation/Informatin" component={InfoToMyInfo}/>
<Route path="/weather_code/Recommendation/Clothing" component={InfoToMyClothing}/>
</NewReactiveType>
</Switch>
</Router>
</Userdata>
    );
}

export default App;