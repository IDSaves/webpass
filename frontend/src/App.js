import React, { useEffect, Fragment } from "react";
import Home from "./components/home";
import Footer from "./components/footer";

const App = () => {

    useEffect(() => {
        if (!localStorage.getItem("lang")) localStorage.setItem("lang", "Eng");
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
        document.body.className = localStorage.getItem("theme");
    }, []);

    return(
        <Fragment>
            <div className="row m-0">
                <div className="col-lg-6 offset-lg-3 p-0 mt-3">
                    <div className="container-fluid">
                        <Home />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default App;
