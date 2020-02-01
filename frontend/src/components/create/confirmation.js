import React from "react";
import words from "../../words";

const Confirmation = () => {
    const text = words().creation.confirmation_component;
    return(
        <div className="container-fluid box m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>

            <div className="form-group">
                <label data-toggle="tooltip" title={text.tooltip}>{text.input}</label>
                <input type="text" className="form-control" />
            </div>
            <button className="btn btn-success container-fluid">{text.button}</button>
        </div>
    );
};

export default Confirmation;