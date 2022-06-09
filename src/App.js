import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IdFind from "./find/IdFind";
import Home_page from "./Home_page";
import Information from "./Information";
import Sign_up from "./Sign_up";
import Userdata from "./Userdata";
import NewReactiveType from "./Reactive type/NewReactiveType";
function App (){
return(
<Userdata>
<Router>
<Switch>
<NewReactiveType>
<Route path="/" exact component={Home_page}/>
<Route path="/Id_find"  component={IdFind}/>
<Route path="/Sign_up" component={Sign_up}/>
<Route path="/UserInformation/:id" component={Information}/>
</NewReactiveType>
</Switch>
</Router>
</Userdata>
    );
}

export default App;