import React, { Fragment } from "react";
import Example from "./example";
import Create from "./create";
import Search from "./search";
import Management from "./management";
import words from "../../words";
import "./index.scss";

const Home = () => {
    const tagline = words().home.tagline;
    document.title = "Web Passport";
    return(
        <Fragment>
            <h5 className="text-muted text-center">{tagline}</h5>

            <center>
                <Example />
                <Search />
                <Management />
                <Create />
            </center>

        </Fragment>
    );
};

export default Home;