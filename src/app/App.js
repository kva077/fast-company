import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layout/main";
import Login from "./layout/login";
import Users from "./layout/users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
