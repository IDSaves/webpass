import React, { Fragment } from "react";
import Example from "./example";
import Create from "./create";
import Search from "./search";
import Management from "./management";
import words from "../../words";
import "./index.scss";

const Home = () => {
    const tagline = words().home.tagline;
    
    return(
        <Fragment>
            <h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1>
            <h5 className="text-muted text-center">{tagline}</h5>

            <center className="mb-4">
                <Example />
                <Search />
                <Management />
                <Create />
            </center>


        </Fragment>
    );
};

export default Home;