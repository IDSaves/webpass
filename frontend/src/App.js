import React, { useEffect, Fragment } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import Create from "./components/create";
import Passport from "./components/passport";
import ManagePassport from "./components/manage";
import Cookies from "./components/cookies";
import CookiesNotification from "./components/cookies/notification";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import words from "./words";

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
            <div className={!localStorage.getItem("cookies_accept") ? `row mt-3 m-0` : "row m-0"}>
                <div className="col-lg-6 offset-lg-3 p-0 mt-3">
                    <div className="container-fluid">
                        <Link to="/"><h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1></Link>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/create" component={Create} />
                            <Route path="/manage/:key" component={ManagePassport} />
                            <Route path="/cookies-policy" component={Cookies} />
                            <Route path="/:code" component={Passport} />
                        </Switch>
                    </div>
                </div>
            </div>
            {!localStorage.getItem("cookies_accept") ? <CookiesNotification /> : "" }
            <Footer />
        </Fragment>
    );
};

export default App;
