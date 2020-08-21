import React from "react";
import "./assets/css/base.css";
import "./assets/css/bootstrap-grid.min.css";
import "./assets/icons/default/jio-icon.css";
import routePath from "./shared/constants/RoutePath";
import "./App.css";
import Home from "../src/screens/Home";
import PestAndDiseases from "../src/screens/PestAndDiseases";
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
                        component={PestAndDiseases}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
