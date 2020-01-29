import React from "react";
import words from "../../../words";
import { Link } from "react-router-dom";

const Create = () => {
    const text = words().home.create_button;
    return(
        <div className="home-component box p-3">
            <Link to="/create" className="btn btn-success container-fluid text-white">{text}</Link>
        </div>
    );
}; 

export default Create;