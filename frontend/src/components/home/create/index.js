import React from "react";
import words from "../../../words";

const Create = () => {
    const text = words().home.create_button;
    return(
        <div className="home-component box p-3">
            <button type="button" className="btn btn-outline-success container-fluid">{text}</button>
        </div>
    );
}; 

export default Create;