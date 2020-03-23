import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Department from "./components/pages/Department";
import Role from "./components/pages/Role";
import Damage from "./components/pages/Damage";
import Add from "./components/pages/Add";


function App () {
    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/" component = {Home} />
                <Route exact path="/home" component = {Home} />
                <Route exact path="/department" component = {Department} />
                <Route exact path="/role" component = {Role} />
                <Route exact path="/damage" component = {Damage} />
                <Route exact path="/add" component = {Add} />
            </div>
        </Router>
    )
}

export default App;