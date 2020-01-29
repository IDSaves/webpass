import React from "react";
import words from "../../words";

const Personal = () => {
    const text = words().creation.personal_component;
    return(
        <div className="container-fluid box m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>
        </div>
    );
};

export default Personal;