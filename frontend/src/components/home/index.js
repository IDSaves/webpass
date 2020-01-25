import React, { Fragment } from "react";
import Example from "./example";
import Create from "./create";
import Search from "./search";
import words from "../../words";
import "./index.scss";

const Home = () => {
    const tagline = localStorage.getItem("lang") === "Ru" ? words("ru").home.tagline : words().home.tagline;
    
    return(
        <Fragment>
            <h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1>
            <h5 className="text-muted text-center">{tagline}</h5>

            <center className="mb-5">
                <Example />
            </center>

            <div className="row">
                <div className="col-md-8 offset-md-2 col-12 mb-3">
                    <div className="container-fluid p-0">
                        <Search />
                    </div>
                </div>
                <div className="col-md-8 offset-md-2 col-12">
                    <div className="container-fluid p-0">
                        <Create />
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Home;