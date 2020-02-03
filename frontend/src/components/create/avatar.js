import React from "react";
import words from "../../words";

const Avatar = ({ handleAvatar, state }) => {
    const text = words().creation.avatar_component;
    return(
        <div className="image-input box p-3">
            <h4 className="text-center mb-3">{text.title}</h4>
            <center><img className="img-fluid mb-3 rounded" src={state.file ? URL.createObjectURL(state.file) : ""} /></center>
            <div className="custom-file">
                <input type="file" className="custom-file-input" onChange={(e) => handleAvatar(e)}/>
                <label className="custom-file-label">{state.file ? state.file.name : text.input}</label>
            </div>
        </div>
    );
};

export default Avatar;