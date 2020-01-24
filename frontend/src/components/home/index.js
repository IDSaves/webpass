import React from "react";
import EngWords from "../../words/english.json";
import RuWords from "../../words/russian.json";
import "./index.scss";

const Home = () => {
    const tagline = localStorage.getItem("lang") == "Ru" ? RuWords.home.tagline : EngWords.home.tagline;
    return(
        <div>
            <h1 className="text-center mt-3"><b>WEB PASSPORT</b></h1>
            <h5 className="text-muted text-center">{tagline}</h5>
        </div>
    );
};

export default Home;