import React, { useState, Fragment } from "react";
import axios from "axios";
import words from "../../words";
import Avatar from "./avatar";
import Personal from "./personal";
import Social from "./social";
import Confirmation from "./confirmation";
import "./index.scss";


const Create = () => {
    const [avatar, setAvatar] = useState(null);
    const [personal, setPersonal] = useState({});
    const [social, setSocial] = useState({});
    const [confirmation, setConfirmation] = useState("");
    const text = words().creation;
    document.title = "Passport creation";

    const handleAvatar = (e) => setAvatar(e.target.files[0]);
    const handleConfirmation = (e) => setConfirmation(e.target.value);

    const handlePersonal = (e) => {
        const pers = personal;
        pers[e.target.id] = e.target.value; 
        setPersonal(pers);
    }

    const handleSocial = (e) => {
        const soc = social;
        soc[e.target.id] = e.target.value;
        setSocial(soc);
    }

    const postImage = () => new Promise((resolve, reject) => {
        const data = new FormData();
        data.append("image", avatar);

        axios({
            method: "post",
            url: "https://api.imgur.com/3/image",
            data: data,
            headers: {"Authorization": "Client-ID 4532950a219a439"},
            mimeType: "multipart/form-data"
        })
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });

    const create = () => {
        // console.log("Avatar: ", avatar);
        // console.log("Personal: ", personal);
        // console.log("Social: ", social);
        // console.log("Confirmation: ", confirmation);

        postImage()
            .then((data) => console.log("Success: (image link)" + data.data.data.link))
            .catch((err) => console.log(err));
        setAvatar(null);
    }

    return(
        <Fragment>
            <h5 className="text-success text-center">{text.title}</h5>
            <div className="mb-5 mt-5 creation">

                <Avatar state={avatar} handleAvatar={handleAvatar} />

                <div className="row mt-4 mb-4">

                    <div className="col-xl-6 mb-3">
                        <Personal state={personal} handlePersonal={handlePersonal}/>
                    </div>

                    <div className="col-xl-6">
                        <Social state={social} handleSocial={handleSocial}/>
                    </div>

                </div>

                <Confirmation state={confirmation} handleConfirmation={handleConfirmation} create={create} />

            </div>
        </Fragment>
    );
};

export default Create;