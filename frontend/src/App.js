import React, { useEffect, Fragment } from 'react';
import Home from "./components/home";
import Language from "./components/language";

const App = () => {

    useEffect(() => {
        if (!localStorage.getItem("lang")) localStorage.setItem("lang", "Eng");
    }, []);

    return(
        <Fragment>
            <div className="row m-0">
                <div className="col-lg-6 offset-lg-3 p-0 mt-3">
                    <div className="container-fluid p-3">
                        <Home />
                    </div>
                </div>
            </div>
            <Language />
        </Fragment>
    );
};

export default App;
