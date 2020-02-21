import React from "react";
import words from "../../words";

const Confirmation = ({ state, handleConfirmation, create, isBtnDisabled }) => {
    const text = words().creation_manage.confirmation_component;
    return(
        <div className="container-fluid box m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>

            <div className="form-group">
                <label>{text.input} <span className="text-warning">({text.tooltip})</span></label>
                <input type="text" className="form-control" onChange={(e) => handleConfirmation(e)} />
            </div>
            <button className={`btn btn-success container-fluid ${isBtnDisabled && "disabled"}`} onClick={!isBtnDisabled ? create : null}>{text.cbutton}</button>
        </div>
    );
};

export default Confirmation;