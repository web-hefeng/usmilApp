import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom"
import Login from "./pages/Login/Login"
import Reg from "./pages/Reg/Reg"
import asyncComponent from "./utils/asyncComponent"
const Index = asyncComponent(() => import("./pages/Index/Index"))
const ListDetail = asyncComponent(() => import("./pages/Index/components/ListDetail/ListDetail"))
const feilei = asyncComponent(() => import("./pages/Fenlei/Fenlei"))
const Foot = asyncComponent(() => import("./pages/Index/components/Foot"))
const cateDetail = asyncComponent(() => import("./pages/FenleiDetail/FenleiDetail"))
const Shop = asyncComponent(()=>import("./pages/Shop/Shop"))
const Mine = asyncComponent(()=>import("./pages/Mine/Mine"))

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/detail" component={ListDetail} ></Route>
        <Route path="/feilei" component={feilei}></Route>
        <Route path="/catedetail" component={cateDetail}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>

    </div>
  );
}

export default App;
