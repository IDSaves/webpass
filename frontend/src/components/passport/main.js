import React from "react";
import ModalImage from "react-modal-image";

const Main = ({ state }) => {
    return (
        <div className="box pass-comp mt-5 mb-3 p-3">
            <ModalImage
                small={state.avatar}
                medium={state.avatar}
                hideDownload="false"
                hideZoom="false"
                alt="Avatar"
                className="avatar mb-3"
            />
            <h5 className={`${(!state.personal.name && !state.personal.surname) && "mb-0"} text-center`}>{state.personal.nickname}</h5>
            {state.personal.name || state.personal.surname ? (
                <h6 className="text-muted mb-0 text-center">{`${state.personal.name} ${state.personal.surname}`}</h6>
            ) : ""}
        </div>
    );
};

export default Main;
