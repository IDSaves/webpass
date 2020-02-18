import React from "react";
import words from "../../words";
import countries from "../../countries";

const Personal = ({ state, handlePersonal }) => {
    const text = words().manage.personal_component;
    const reqText = words().manage.req;
    return(
        <div className="container-fluid box personal-inputs m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>

            <div className="form-group">
                <label>{text.nickname} <span className="text-warning">({reqText})</span>:</label>
                <input type="text" className="form-control" id="nickname" defaultValue={state.nickname ? state.nickname : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
                <label>{text.name}:</label>
                <input type="text" className="form-control" id="name" defaultValue={state.name ? state.name : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
                <label>{text.surname}:</label>
                <input type="text" className="form-control" id="surname" defaultValue={state.surname ? state.surname : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
                <label>{text.status}:</label>
                <input type="text" className="form-control" id="status" defaultValue={state.status ? state.status : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
                <label>{text.email}:</label>
                <input type="text" className="form-control" id="email" defaultValue={state.email ? state.email : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
                <label>{text.bdate}:</label>
                <input type="date" className="form-control" id="bdate" defaultValue={state.bdate ? state.bdate : ""} onChange={(e) => handlePersonal(e)}/>
            </div>

            <div className="form-group">
            <label>{text.country}:</label>
            <select className="form-control" id="country" defaultValue={state.country ? state.country : ""} onChange={(e) => handlePersonal(e)}>
                <option></option>
                {countries().map((c, i) => (
                    <option key={i} value={c.code}>{c.name}</option>
                ))}
            </select>
            </div>

        </div>
    );
};

export default Personal;