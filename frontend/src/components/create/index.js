import React, { useState, Fragment } from "react";
import words from "../../words";
import Avatar from "./avatar";
import Personal from "./personal";
import Social from "./social";
import Confirmation from "./confirmation";
import "./index.scss";


const Create = () => {
    const [avatar, setAvatar] = useState(null);
    const text = words().creation;
    document.title = "Passport creation";

    return(
        <Fragment>
            <h5 className="text-success text-center">{text.title}</h5>
            <div className="mb-5 mt-5 creation">

                <Avatar />

                <div className="row mt-4 mb-4">

                    <div className="col-xl-6 mb-3">
                        <Personal />
                    </div>

                    <div className="col-xl-6">
                        <Social />
                    </div>

                </div>

                <Confirmation />

            </div>
        </Fragment>
    );
};

export default Create;