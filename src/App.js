/* eslint-disable react/jsx-no-undef */
import React from "react";

import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Switch,
    Redirect,
} from "react-router-dom";
import "./assets/css/global.css";
import MainNav from "./Components/MainNav";
import Baraka from "./Pages/Baraka";
import BeAWriter from "./Pages/BeAWriter";
import PublicComments from "./Pages/PublicComments";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            {/* Router ta ekta component e arki  */}
            {/* basename="/barakabooks"  hashType="noslash"*/}
            <Router basename="/barakabooks">
                {/* er moddhe bole dite hobe .. ki ki path ase  */}
                {/* ek ekta path define korar jonno ek ekta route define korte hobe */}
                {/* exact nam er props ta true kore dilam  */}

                <MainNav></MainNav>
                <Switch>
                    <Route exact="true" path="/" component={Baraka} />
                    <Route
                        exact="true"
                        path="/beAwriter"
                        component={BeAWriter}
                    />
                    <Route
                        exact="true"
                        forceRefresh={true}
                        path="/publicComments"
                        component={PublicComments}
                    />
                    <Route
                        exact="true"
                        forceRefresh={true}
                        path="/publicComments/#complainBox"
                        component={PublicComments}
                    />
                    <Route
                        exact="true"
                        forceRefresh={true}
                        path="/publicComments/#giveSuggestionBox"
                        component={PublicComments}
                    />
                    <Route
                        exact="true"
                        path="/publicComments/#askUs"
                        component={PublicComments}
                    />
                    <Route
                        exact="true"
                        path="/publicComments/#frequentlyAskingQuestion"
                        component={PublicComments}
                    />
                    {/* <Route exact="true" path="/publicComments/public">
                        <Redirect to="/beAwriter" />{" "}
                    </Route> */}
                    <Route component={ErrorPage} />
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
