import React, { useEffect, Fragment } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

const NoMatch = ({ location }) => {
    document.title = "404 - Davydoff's page";
    return (
        <div className="mt-4 mb-4 text-center">
        <Link to="/">Home</Link>
        <h3 className="mt-3">No match for <code>{location.pathname}</code></h3>
        </div>
    );
};

const App = () => {

    useEffect(() => {
        if (!localStorage.getItem("lang")) {
            let lang = navigator.language || navigator.userLanguage;
            if (lang === "ru-RU") localStorage.setItem("lang", "Ru");
            else localStorage.setItem("lang", "Eng");
        }
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
        document.body.className = localStorage.getItem("theme");
    }, []);

    return(
        <Fragment>
            <div className="row m-0">
                <div className="col-lg-6 offset-lg-3 p-0 mt-3">
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default App;
