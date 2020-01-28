import React from "react";
import words from "../../../words";


const Management = () => {
    const inputText = words().home.management_button.input; 
    const btnText = words().home.management_button.button;

    return(
        <div className="home-component box p-3 mb-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder={inputText} />
            </div>
            <button type="button" className="btn btn-info container-fluid mt-3">{btnText}</button>
        </div>
    );
};  

export default Management;