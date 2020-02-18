import React from "react";
import words from "../../words";

const Confirmation = ({ manage, isBtnDisabled }) => {
    const text = words().manage.confirmation_component.button;
    return(
        <button className={`btn btn-success container-fluid ${isBtnDisabled && "disabled"}`} onClick={!isBtnDisabled ? manage : null}>{text}</button>
    );
};

export default Confirmation;