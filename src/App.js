import { Component } from "react";
import LoginForm  from "./components/LoginForm"
import Home from "./components/Home"
import { Routes,BrowserRouter,Route} from 'react-router-dom'
import SecuredRoute from "./components/SecuredRoute";




class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route  element={<SecuredRoute />}>
            <Route exact path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}



export default App;
