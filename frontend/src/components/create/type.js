import React from "react";
import words from "../../words";


const Type = ({ handleType }) => {
    const text = words().creation_manage.type_component;

    return(
        <div className="type-input box p-3 mb-3">
            <h4 className="text-center mb-3">{text.title}</h4>
                <div className="form-group mb-0">
                    <label>{text.input}:</label>
                    <select className="form-control" onChange={(e) => handleType(e)}>
                        <option value="person">{text.person}</option>
                        <option calue="org">{text.org}</option>
                    </select>
                </div>
        </div>
    );
}

export default Type;