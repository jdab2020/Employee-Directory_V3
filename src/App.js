import React, {useState}  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Department from "./components/pages/Department";
import Role from "./components/pages/Role";
import Damage from "./components/pages/Damage";
import Add from "./components/pages/Add";


function App() {
    const [search, setSearch] = useState({ name: "" });
    console.log(search);
    return (
        
        <Router>
            <div>
                <NavBar search={search} setSearch={setSearch}/>
                {/* <Route exact path="/" component={Home} search={search} /> */}
                <Route
                    exact path="/"
                    render={(props) => <Home {...props} search={search} />}
                />
                <Route exact path="/home" component={Home} search={search} />
                <Route exact path="/department" component={Department} search={search} />
                <Route exact path="/role" component={Role} search={search} />
                <Route exact path="/damage" component={Damage} search={search} />
                <Route exact path="/add" component={Add} search={search} />
            </div>
        </Router>
    )
}

export default App;