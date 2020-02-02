import React from "react";
import words from "../../words";
import countries from "../../countries";
import { Twemoji } from "react-emoji-render";

const Personal = () => {
    const text = words().creation.personal_component;
    const reqText = words().creation.req;
    return(
        <div className="container-fluid box m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>

            <div className="form-group">
                <label>{text.nickname} <span className="text-warning">({reqText})</span>:</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>{text.name}:</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>{text.surname}:</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>{text.status}:</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>{text.email}:</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>{text.bdate}:</label>
                <input type="date" className="form-control" />
            </div>

            <div className="form-group">
            <label>{text.country}:</label>
            <select className="form-control">
                <option></option>
                {countries().map((c, i) => (
                    <option key={i}>{c.name}</option>
                ))}
            </select>
            </div>

        </div>
    );
};

export default Personal;