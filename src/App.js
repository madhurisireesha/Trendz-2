import { BrowserRouter,Route,Switch } from "react-router-dom";
import Login from './components/Login'
import Products from './components/Products'
import Cart from './components/Cart'
import Notfound from './components/Notfound'
import Productdetails from "./components/Productdetails";
import Home from './components/Home'
import './App.css'
const App=()=>{
    return(
        <div className="entirecontainer">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact  path='/login' component={Login}/>
                <Route exact path='/products' component={Products}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/products/:id' component={Productdetails}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}
export default App