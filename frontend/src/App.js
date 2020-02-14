import React, { useEffect, Fragment } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import Create from "./components/create";
import Passport from "./components/passport";
import Cookies from "./components/cookies";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import words from "./words";

const NoMatch = ({ location }) => {
    document.title = "404 - Web Passport";
    const text = words(); 
    return (
        <div className="mt-4  text-center">
            <h4 className="mt-3">{text.no_match.title}<code>{location.pathname}</code></h4>
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
                        <Link to="/"><h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1></Link>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/create" component={Create} />
                            <Route path="/passport/:code" component={Passport} />
                            <Route path="/cookies-policy" component={Cookies} />
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
