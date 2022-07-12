import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mypage from "./Mypage";
import Sign_up from "./Sign_up";
import Userdata from "./Userdata";
import Myadress from "./Myadress";
import IdFind from "./Find/IdFind";
import Home_page from "./Home_page";
import Board from "./BarPages/Board";
import Information from "./Information";
import LogoWithMainPage from "./LogoWithMainPage";
import InfoToMyInfo from "./BarPages/InfoToMyInfo";
import InfoToWeather from "./BarPages/InfoToWeather";
import InfoToMyClothing from "./BarPages/InfoToMyClothing";
import NewReactiveType from "./Reactive type/NewReactiveType";
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
<Route path="/weather_coder/Login" component={Home_page}/>
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