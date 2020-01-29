import React from "react";
import words from "../../words";

const Avatar = () => {
    const text = words().creation.avatar_component;
    return(
        <div className="image-input box p-3">
            <h4 className="text-center mb-3">{text.title}</h4>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" for="customFile">{text.input}</label>
            </div>
        </div>
    );
};

export default Avatar;