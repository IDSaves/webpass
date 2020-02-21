import React from "react";
import words from "../../words";

const Confirmation = ({ manage, isBtnDisabled }) => {
    const text = words().creation_manage.confirmation_component.mbutton;
    return(
        <button className={`btn btn-success container-fluid ${isBtnDisabled && "disabled"}`} onClick={!isBtnDisabled ? manage : null}>{text}</button>
    );
};

export default Confirmation;