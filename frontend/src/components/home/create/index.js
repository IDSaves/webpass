import React from "react";
import words from "../../../words";

const Create = () => {
    const text = localStorage.getItem("lang") === "Ru" ? words("ru").home.create_button : words().home.create_button;
    return(
        <div className="home-component box p-3">
            <button type="button" class="btn btn-outline-success container-fluid">{text}</button>
        </div>
    );
}; 

export default Create;