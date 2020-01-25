import React, { Fragment } from "react";
import Example from "./example";
import words from "../../words";
import "./index.scss";

const Home = () => {
    const tagline = localStorage.getItem("lang") === "Ru" ? words("ru").home.tagline : words().home.tagline;
    
    return(
        <Fragment>
            <h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1>
            <h5 className="text-muted text-center">{tagline}</h5>

            <center>
                <Example />
            </center>

        </Fragment>
    );
};

export default Home;