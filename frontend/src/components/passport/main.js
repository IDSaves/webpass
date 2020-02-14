import React from "react";
import { Twemoji } from "react-emoji-render";
import countries from "../../countries";

const Main = ({ state }) => {
    return (
        <div className="box pass-comp mt-5 mb-3 p-3">
            <img className="mb-3" alt="avatar" src={state.avatar} />
            <h5 className={`${(!state.personal.name && !state.personal.surname) && "mb-0"} text-center`}>{state.personal.nickname}</h5>
            {state.personal.name || state.personal.surname ? (
                <h6 className="text-muted mb-0 text-center">{`${state.personal.name} ${state.personal.surname}`}</h6>
            ) : ""}
        </div>
    );
};

export default Main;
