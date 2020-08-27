import React from "react";
import "./assets/css/base.css";
import "./assets/css/bootstrap-grid.min.css";
import "./assets/icons/default/jio-icon.css";
import routePath from "./shared/constants/RoutePath";
import "./App.css";
import Home from "../src/screens/Home";
import InsertData from "../src/screens/InsertData";
import DisplayData from "../src/screens/DisplayData";
import PestAndDisease from "../src/screens/PestAndDisease";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={routePath.DEFAULT} component={Home} />
                    <Route
                        exact
                        path={routePath.PESTS_AND_DISEASES}
                        component={PestAndDisease}
                    />
                    <Route
                        exact
                        path={routePath.INSERT}
                        component={InsertData}
                    />
                    <Route
                        exact
                        path={routePath.DISPLAY}
                        component={DisplayData}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
