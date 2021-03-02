import React from "react";
import ScanningQr from "./Components/ScanningQr";
import AddPhoneNo from "./Components/AddPhoneNo";
import Ready from "./Components/Ready";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/Qr" component={ScanningQr}></Route>
                <Route path="/phnNo" component={AddPhoneNo}></Route>
                <Route path="/ready" component={Ready}></Route>

                <Redirect to="/Qr"></Redirect>
            </Switch>
        </HashRouter>
    );
}

export default App;
