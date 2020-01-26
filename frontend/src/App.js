import React, { useEffect, Fragment } from "react";
import Home from "./components/home";
import Language from "./components/language";
import Footer from "./components/footer";

const App = () => {

    useEffect(() => {
        if (!localStorage.getItem("lang")) localStorage.setItem("lang", "Eng");
    }, []);

    return(
        <Fragment>
            <Language />
            <div className="row m-0">
                <div className="col-lg-6 offset-lg-3 p-0 mt-3">
                    <div className="container-fluid p-3">
                        <Home />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default App;
